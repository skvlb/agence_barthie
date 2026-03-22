"""
Improved logo processing with much more aggressive background removal.
Uses flood-fill from corners to detect background, handles anti-aliasing.
"""
from PIL import Image
import os

def remove_bg_floodfill(input_path, output_path, invert_to_white=True, tolerance=60):
    """
    Remove background using flood-fill from corners.
    Much more robust than simple threshold.
    """
    img = Image.open(input_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()
    
    # Sample background color from corners (average of corner regions)
    corner_samples = []
    sample_size = max(5, min(w, h) // 20)
    for cx, cy in [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)]:
        for dx in range(min(sample_size, w)):
            for dy in range(min(sample_size, h)):
                sx = min(max(cx + dx - sample_size//2, 0), w-1)
                sy = min(max(cy + dy - sample_size//2, 0), h-1)
                corner_samples.append(pixels[sx, sy][:3])
    
    bg_r = sum(c[0] for c in corner_samples) // len(corner_samples)
    bg_g = sum(c[1] for c in corner_samples) // len(corner_samples)
    bg_b = sum(c[2] for c in corner_samples) // len(corner_samples)
    print(f"  Detected background color: RGB({bg_r}, {bg_g}, {bg_b})")
    
    # Create mask: True = background
    visited = [[False]*h for _ in range(w)]
    bg_mask = [[False]*h for _ in range(w)]
    
    # BFS flood fill from all 4 corners
    from collections import deque
    queue = deque()
    
    # Start from edges (not just corners)
    for x in range(w):
        for y in [0, h-1]:
            r, g, b, a = pixels[x, y]
            if abs(r - bg_r) < tolerance and abs(g - bg_g) < tolerance and abs(b - bg_b) < tolerance:
                queue.append((x, y))
                visited[x][y] = True
                bg_mask[x][y] = True
    for y in range(h):
        for x in [0, w-1]:
            r, g, b, a = pixels[x, y]
            if abs(r - bg_r) < tolerance and abs(g - bg_g) < tolerance and abs(b - bg_b) < tolerance:
                if not visited[x][y]:
                    queue.append((x, y))
                    visited[x][y] = True
                    bg_mask[x][y] = True
    
    # Flood fill
    while queue:
        cx, cy = queue.popleft()
        for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
            nx, ny = cx+dx, cy+dy
            if 0 <= nx < w and 0 <= ny < h and not visited[nx][ny]:
                visited[nx][ny] = True
                r, g, b, a = pixels[nx, ny]
                if abs(r - bg_r) < tolerance and abs(g - bg_g) < tolerance and abs(b - bg_b) < tolerance:
                    bg_mask[nx][ny] = True
                    queue.append((nx, ny))
    
    # Apply mask
    for y in range(h):
        for x in range(w):
            if bg_mask[x][y]:
                pixels[x, y] = (0, 0, 0, 0)  # Fully transparent
            elif invert_to_white:
                r, g, b, a = pixels[x, y]
                # Calculate luminosity - darker pixels become more opaque white
                lum = (r + g + b) / 3
                alpha = max(0, min(255, int(255 - lum)))
                # For very dark pixels, near full opacity
                if lum < 50:
                    alpha = 255
                pixels[x, y] = (255, 255, 255, alpha)
            else:
                # Keep original color, just ensure non-bg is visible
                r, g, b, a = pixels[x, y]
                pixels[x, y] = (r, g, b, 255)
    
    # Crop to content (remove transparent edges)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    
    img.save(output_path, "PNG")
    print(f"  -> Saved: {output_path} ({img.size[0]}x{img.size[1]})")

# ============================================================
# Process all logos
# ============================================================

print("=== AB LOGOS ===")

remove_bg_floodfill(
    "extracted_assets/charte/slide1_img1.png",
    "public/images/logos/logo-ab-full-white.png",
    invert_to_white=True
)

remove_bg_floodfill(
    "extracted_assets/charte/slide3_img5.png",
    "public/images/logos/logo-ab-monogram-white.png",
    invert_to_white=True
)

remove_bg_floodfill(
    "extracted_assets/charte/slide1_img1.png",
    "public/images/logos/logo-ab-full-dark.png",
    invert_to_white=False
)

remove_bg_floodfill(
    "extracted_assets/charte/slide3_img5.png",
    "public/images/logos/logo-ab-monogram-dark.png",
    invert_to_white=False
)

print("\n=== CLIENT LOGOS ===")

client_logos = {
    "extracted_assets/sales_pitch/slide7_img19.png": "loro-piana",
    "extracted_assets/sales_pitch/slide7_img20.png": "chloe",
    "extracted_assets/sales_pitch/slide7_img21.png": "bottega-veneta",
    "extracted_assets/sales_pitch/slide7_img22.png": "vhernier",
    "extracted_assets/sales_pitch/slide7_img23.png": "stella-mccartney",
}

for src, name in client_logos.items():
    print(f"\n  Processing {name}...")
    remove_bg_floodfill(src, f"public/images/clients/{name}.png", invert_to_white=True)

print("\n=== DONE ===")
