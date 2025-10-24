# Django Portfolio - Quick Start Guide

## Aapka Portfolio Taiyar Hai! 🎉

Aapka professional Django portfolio website ab fully ready hai with green theme aur sabhi features!

## Website Pages

1. **Home (/)** - Introduction, skills, aur social links
2. **Resume (/resume)** - Education, certifications aur resume download
3. **Projects (/projects)** - Aapke 5 major projects cards mein
4. **Contact (/contact)** - Email, phone, aur social profiles

## Admin Panel Se Resume Upload Kaise Karein

### Step 1: Admin Panel Login
1. Browser mein jao: `/admin/`
2. Default credentials (development ke liye):
   - Username: `admin`
   - Password: `admin123`

**Important:** Apna khud ka secure password banao using:
```bash
python manage.py createsuperuser
```

### Step 2: Resume Upload Karein
1. Admin panel mein "Resume" section mein jao
2. Do options hain:
   - **Option A:** Direct PDF file upload karo (Recommended)
   - **Option B:** Google Drive link ya koi external link add karo
3. "Save" button click karo

### Step 3: Projects Manage Karein
1. Admin panel mein "Projects" section mein jao
2. Add/Edit karo:
   - Title
   - Description
   - Tech Stack
   - Project Link
   - Order number (lower numbers pehle dikhenge)

## Color Theme
- **Dark Green:** #008060 (Main color)
- **Light Green:** #00a97f (Buttons, highlights)
- **Background:** #e9fff1 (Light green background)

## Technical Details
- **Framework:** Django 5.2.7
- **Database:** SQLite3
- **Port:** 5000
- **Admin URL:** `/admin/`

## Aapki Personal Information (Already Added)
- **Name:** Ayush Tiwari
- **Email:** ayushtiwariatcoon@gmail.com
- **Phone:** +91 8305117567
- **GitHub:** github.com/AyushTIW30
- **LinkedIn:** linkedin.com/in/ayush-tiwari-2301222ba
- **LeetCode:** leetcode.com/u/AyushTIW30

## Projects Already Included
1. Fabric Optimizer
2. Lost and Found Portal
3. Bangalore House Price Prediction
4. ATM Simulation System
5. Fun Games in Python

## Helpful Commands

### Server Start (Already Running)
```bash
python manage.py runserver 0.0.0.0:5000
```

### New Admin User Banao
```bash
python manage.py createsuperuser
```

### Database Update (if needed)
```bash
python manage.py makemigrations
python manage.py migrate
```

## Security Notes
- Development mein SESSION_SECRET environment variable use hoti hai
- Production ke liye apna strong SECRET_KEY set karein
- Admin password change karna mat bhulna!

## Next Steps (Optional Future Enhancements)
- Contact form add kar sakte ho email backend ke saath
- Blog section banao technical articles ke liye
- Certificates page add karo PDF viewer ke saath
- Scroll animations aur dark mode add karo

---

**Sab kuch ready hai! Enjoy your professional portfolio! 💚**
