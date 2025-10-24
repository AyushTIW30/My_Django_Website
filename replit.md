# Django Portfolio Website - Ayush Tiwari

## Overview
A professional Django-based portfolio website with a green theme showcasing projects, resume, skills, and contact information.

## Project Status
**Last Updated:** October 24, 2025

### Current Features
- ✅ Home page with introduction, technical skills, and social media links
- ✅ Resume section with education, certifications, and downloadable resume option
- ✅ Projects showcase displaying 5 major projects with cards layout
- ✅ Contact page with email, phone, and social profile links (GitHub, LinkedIn, LeetCode)
- ✅ Green-themed responsive design (#008060, #00a97f, #e9fff1)
- ✅ Admin panel for uploading and managing resume files
- ✅ Database models for Resume and Projects management

## Project Structure
```
portfolio/               # Main Django project
├── settings.py         # Project settings (ALLOWED_HOSTS='*', static/media config)
├── urls.py            # Main URL routing with media files support
└── wsgi.py            # WSGI application

home/                  # Main app for portfolio pages
├── models.py          # Resume and Project models
├── views.py           # Views for home, resume, projects, contact
├── urls.py            # URL patterns for all pages
├── admin.py           # Admin configuration for models
└── templates/home/    # HTML templates
    ├── base.html      # Base template with navbar and footer
    ├── index.html     # Home page
    ├── resume.html    # Resume page
    ├── projects.html  # Projects showcase
    └── contact.html   # Contact page

static/css/            # Static CSS files
└── style.css          # Green-themed responsive styling

media/                 # User-uploaded files (resumes)
└── resumes/          # Resume file uploads
```

## Technical Stack
- **Backend:** Django 5.2.7
- **Database:** SQLite3
- **Frontend:** HTML5, CSS3
- **Fonts:** Poppins (Google Fonts)
- **Icons:** Font Awesome 6.4.0
- **Server Port:** 5000

## Admin Panel Access
- **URL:** `/admin/`
- **Username:** `admin`
- **Password:** `admin123`

**Important:** Change admin credentials for production use!

## How to Update Resume
1. Go to `/admin/` and login
2. Navigate to "Resume" section
3. You can either:
   - Upload a PDF file directly (recommended)
   - Add an external link (e.g., Google Drive link)
4. Click "Save"

## How to Manage Projects
1. Go to `/admin/` and login
2. Navigate to "Projects" section
3. Add/Edit projects with:
   - Title
   - Description
   - Tech Stack
   - Project Link
   - Display Order (lower numbers appear first)

## Color Palette
- **Dark Green:** #008060 (Primary brand color)
- **Light Green:** #00a97f (Accent color, hover effects)
- **Background:** #e9fff1 (Light green background)
- **White:** #ffffff (Cards, navbar)
- **Text Dark:** #333333
- **Text Light:** #666666

## Personal Information
- **Name:** Ayush Tiwari
- **Email:** ayushtiwariatcoon@gmail.com
- **Phone:** +91 8305117567
- **GitHub:** https://github.com/AyushTIW30
- **LinkedIn:** https://www.linkedin.com/in/ayush-tiwari-2301222ba
- **LeetCode:** https://leetcode.com/u/AyushTIW30/

## Education
- B.Tech in Information Technology (2022-2026)
- Baderi Global Institute of Engineering and Management, Satna
- RGPV University

## Featured Projects
1. **Fabric Optimizer** - Django web app for fabric usage optimization
2. **Lost and Found Portal** - Django portal for reporting lost/found items
3. **Bangalore House Price Prediction** - ML model for property price prediction
4. **ATM Simulation System** - Python-based CLI ATM simulator
5. **Fun Games in Python** - Collection of interactive Python games

## Future Enhancements
- [ ] Add contact form with Django email backend
- [ ] Create certificates section with PDF viewer
- [ ] Implement blog section for technical articles
- [ ] Add scroll animations and hover effects
- [ ] Enable project filtering by technology stack
- [ ] Add dark mode toggle

## Development Notes
- Server runs on port 5000 (configured for Replit deployment)
- Static files served from `/static/` directory
- Media files served from `/media/` directory
- ALLOWED_HOSTS set to '*' for development (restrict in production)
- SQLite database used (consider PostgreSQL for production)

## User Preferences
- Language: Hindi/English mix (conversational)
- Resume update capability through admin panel (user requested)
- Green theme (#008060, #00a97f) as specified
- All personal details and projects as provided in documentation
