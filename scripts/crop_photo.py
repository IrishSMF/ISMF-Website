"""Crop green overlay from photo: keep center-right and top (remove left and bottom)."""
import sys

def main():
    try:
        from PIL import Image
    except ImportError:
        print("Pillow not installed. Run: pip install Pillow")
        sys.exit(1)

    src = r"C:\Users\monya\.cursor\projects\c-Users-monya-ISMF-Website\assets\c__Users_monya_AppData_Roaming_Cursor_User_workspaceStorage_51dca4d758f6c131e1e31451dbfe04e7_images_image-bd7dc3e7-8a3c-4f64-b7ec-5afacb12a929.png"
    dest = r"c:\Users\monya\ISMF-Website\public\team\merlin-girard-razel.png"

    img = Image.open(src).convert("RGB")
    w, h = img.size
    # Crop out left ~25% and bottom ~20% (green overlay area)
    left = int(w * 0.22)
    top = 0
    right = w
    bottom = int(h * 0.88)
    cropped = img.crop((left, top, right, bottom))
    cropped.save(dest, "PNG", optimize=True)
    print("Saved cropped image to", dest)

if __name__ == "__main__":
    main()
