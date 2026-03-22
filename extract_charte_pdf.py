"""Extract text + images from the Charte Graphique PDF"""
import sys, io, os, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

import fitz  # PyMuPDF

# Find the charte graphique PDF
pdf_files = glob.glob("documentation/CHARTE*")
pdf_path = [f for f in pdf_files if f.endswith('.pdf')][0]
print(f"Found: {pdf_path}")

doc = fitz.open(pdf_path)
os.makedirs("extracted_assets/charte_pdf", exist_ok=True)

for i, page in enumerate(doc):
    print(f"\n--- PAGE {i+1} ---")
    print(page.get_text())
    
    # Extract images
    for j, img_info in enumerate(page.get_images(full=True)):
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        img_data = base_image["image"]
        img_ext = base_image["ext"]
        img_path = f"extracted_assets/charte_pdf/page{i+1}_img{j+1}.{img_ext}"
        with open(img_path, "wb") as f:
            f.write(img_data)
        print(f"  [IMAGE] {img_path} ({base_image['width']}x{base_image['height']})")

doc.close()
print("\nDone!")
