# TKV Creatographics - CRM & Website Project

## 📁 Project Structure

This repository contains two main parts:
1. **CRM Dashboard** (Next.js) - Business management system
2. **Main Website** (React/Vite) - Public-facing website

---

## 🗂️ Folder Organization

```
/Volumes/Personal/project CRM/
│
├── 📱 CRM DASHBOARD (Next.js App)
│   ├── app/                      # Next.js 13+ App Router
│   │   ├── page.tsx              # Landing page (/)
│   │   ├── login/                # Authentication pages
│   │   ├── signup/
│   │   ├── dashboard/            # Main dashboard
│   │   ├── leads/                # Lead management
│   │   ├── clients/              # Client management
│   │   ├── invoices/             # Invoice management
│   │   ├── quotations/           # Quotation management
│   │   ├── payments/             # Payment tracking
│   │   ├── expenses/             # Expense tracking
│   │   ├── reports/              # Financial reports
│   │   ├── services/             # Service catalog
│   │   ├── portfolio/            # Portfolio management
│   │   ├── blog/                 # Blog management
│   │   ├── profile/              # User profile
│   │   ├── settings/             # Settings pages
│   │   └── globals.css           # Global styles
│   │
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   └── layout/               # Layout components
│   │       ├── pill-navigation.tsx
│   │       ├── footer.tsx
│   │       ├── crm-layout.tsx
│   │       └── app-layout.tsx
│   │
│   ├── lib/                      # Utilities & helpers
│   │   ├── supabase.ts           # Supabase client
│   │   ├── auth-context.tsx      # Authentication context
│   │   ├── utils.ts              # Utility functions
│   │   └── invoice-helpers.ts    # Invoice utilities
│   │
│   ├── hooks/                    # Custom React hooks
│   ├── context/                  # React contexts
│   ├── theme/                    # Theme configuration
│   │
│   ├── public/                   # Static assets
│   ├── middleware.ts             # Next.js middleware (auth, security)
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.ts        # Tailwind CSS config
│   ├── tsconfig.json             # TypeScript config
│   └── package.json              # Dependencies
│
├── 🌐 MAIN WEBSITE (React/Vite)
│   └── website-source/           # Website source files
│       ├── pages/                # Website pages
│       │   ├── Home.tsx
│       │   ├── About.tsx
│       │   ├── Services.tsx
│       │   ├── Works.tsx
│       │   ├── Blog.tsx
│       │   ├── Contact.tsx
│       │   └── services/         # Service detail pages
│       │
│       ├── components/           # Website components
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   ├── Hero.tsx
│       │   └── ...
│       │
│       ├── data/                 # Static data
│       ├── images/               # Website images
│       ├── App.tsx               # Main app component
│       ├── main.tsx              # Entry point
│       └── index.css             # Website styles
│
├── 🗄️ DATABASE
│   └── supabase/                 # Supabase configuration
│       └── migrations/           # Database migrations
│           ├── 20251102181440_create_crm_schema.sql
│           ├── 20251103083000_add_currency_support.sql
│           ├── 20251103_add_missing_fields.sql
│           ├── 20251103_create_leads_table.sql
│           └── ...
│
├── 📚 DOCUMENTATION
│   └── docs/                     # All documentation
│       ├── ACTIVITY_TRACKING.md
│       ├── EMAIL_SETUP.md
│       ├── FEATURE_ANALYSIS.md
│       ├── IMPLEMENTATION_SUMMARY.md
│       ├── IMPLEMENTATION_SUMMARY_v2.md
│       ├── LEADS_FEATURE.md
│       ├── RESPONSIVE_DESIGN.md
│       ├── SECURITY.md
│       ├── SETTINGS_VERTICAL_MENU.md
│       ├── WHATSAPP_*.md
│       └── ...
│
├── 🗃️ ARCHIVE
│   └── archive/                  # Old/backup files
│       └── project/              # Previous version backup
│
├── 🔧 CONFIGURATION FILES
│   ├── .env                      # Environment variables (DO NOT COMMIT)
│   ├── .env.example              # Environment template
│   ├── .gitignore                # Git ignore rules
│   ├── .eslintrc.json            # ESLint config
│   ├── components.json           # shadcn/ui config
│   ├── postcss.config.js         # PostCSS config
│   └── fix_database.sql          # Database fix script
│
└── README.md                     # This file
```

---

## 🚀 Getting Started

### CRM Dashboard (Next.js)

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Run development server
npm run dev

# Access at http://localhost:3000
```

### Main Website (React/Vite)

```bash
# Navigate to website source
cd website-source

# Install dependencies
npm install

# Run development server
npm run dev

# Access at http://localhost:5173 (or different port)
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# WhatsApp (Optional)
NEXT_PUBLIC_WHATSAPP_PROVIDER=twilio
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
WHATSAPP_BUSINESS_NUMBER=+14155238886
WHATSAPP_API_KEY=your_api_key_here
```

---

## 🗄️ Database Setup

### 1. Create Supabase Project
- Go to https://supabase.com
- Create a new project
- Get your project URL and anon key

### 2. Run Migrations
Go to Supabase SQL Editor and run migrations in order:

```sql
-- 1. Create base schema
supabase/migrations/20251102181440_create_crm_schema.sql

-- 2. Fix RLS policies
supabase/migrations/20251102182659_fix_users_rls_policy.sql

-- 3. Add currency support
supabase/migrations/20251103083000_add_currency_support.sql

-- 4. Add missing fields
supabase/migrations/20251103_add_missing_fields.sql

-- 5. Create leads table
supabase/migrations/20251103_create_leads_table.sql
```

Or run the quick fix:
```sql
-- Run this for quick setup
fix_database.sql
```

---

## 📱 CRM Features

### Core Modules
- ✅ **Dashboard** - Overview & analytics
- ✅ **Leads** - Website form submissions
- ✅ **Clients** - Client management
- ✅ **Services** - Service catalog
- ✅ **Invoices** - Invoice generation & tracking
- ✅ **Quotations** - Quote management
- ✅ **Payments** - Payment tracking
- ✅ **Expenses** - Expense management
- ✅ **Reports** - Financial reports
- ✅ **Portfolio** - Portfolio management (coming soon)
- ✅ **Blog** - Blog management (coming soon)

### Additional Features
- 🔐 Authentication (Supabase Auth)
- 👤 User profiles
- ⚙️ Settings management
- 📧 Email integration
- 💬 WhatsApp integration
- 📊 Activity tracking
- 🔒 Row Level Security (RLS)
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS

---

## 🌐 Website Integration

### Connecting Forms to CRM

The main website can submit forms directly to the CRM's `leads` table:

```javascript
// Example: Contact form submission
const { data, error } = await supabase
  .from('leads')
  .insert([{
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    type: 'contact', // or 'estimate' or 'quote'
    message: formData.message,
    budget: formData.budget
  }]);
```

See `docs/LEADS_FEATURE.md` for detailed integration guide.

---

## 🎨 Tech Stack

### CRM Dashboard
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Date Handling**: date-fns
- **Charts**: Recharts
- **PDF Generation**: jsPDF

### Main Website
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript

---

## 📂 Key Files

### Configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `middleware.ts` - Authentication & security middleware
- `components.json` - shadcn/ui configuration

### Core Files
- `app/layout.tsx` - Root layout with providers
- `app/page.tsx` - Landing page
- `lib/supabase.ts` - Supabase client & types
- `lib/auth-context.tsx` - Authentication context
- `components/layout/pill-navigation.tsx` - Main navigation

---

## 🔒 Security

### Implemented
- ✅ Row Level Security (RLS) on all tables
- ✅ Authentication middleware
- ✅ Protected routes
- ✅ Suspicious path blocking
- ✅ Security headers
- ✅ Input validation
- ✅ SQL injection prevention (Supabase)

### Best Practices
- Never commit `.env` file
- Use environment variables for secrets
- Keep dependencies updated
- Regular security audits
- Proper error handling

---

## 📊 Database Schema

### Main Tables
- `users` - User accounts
- `leads` - Website form submissions
- `clients` - Client information
- `invoices` - Invoice records
- `quotations` - Quotation records
- `payments` - Payment transactions
- `expenses` - Expense records
- `user_settings` - User preferences
- `activity_logs` - Activity tracking
- `login_history` - Login sessions

See migration files in `supabase/migrations/` for complete schema.

---

## 🚢 Deployment

### CRM Dashboard (Next.js)
Recommended platforms:
- **Vercel** (Recommended)
- Netlify
- AWS Amplify
- Railway

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Main Website (Vite)
Recommended platforms:
- **Netlify** (Recommended)
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

```bash
# Build for production
cd website-source
npm run build

# Output in dist/ folder
```

---

## 📝 Development Workflow

### 1. Start Development
```bash
# Terminal 1: CRM Dashboard
npm run dev

# Terminal 2: Main Website (optional)
cd website-source && npm run dev
```

### 2. Make Changes
- CRM changes: Edit files in `app/`, `components/`, `lib/`
- Website changes: Edit files in `website-source/`

### 3. Test
- CRM: http://localhost:3000
- Website: http://localhost:5173

### 4. Database Changes
- Create migration file in `supabase/migrations/`
- Run in Supabase SQL Editor
- Document in migration file

---

## 🐛 Troubleshooting

### CRM not loading?
1. Check `.env` file exists with correct values
2. Verify Supabase connection
3. Run database migrations
4. Check browser console for errors

### Database errors?
1. Run `fix_database.sql` in Supabase
2. Check RLS policies are enabled
3. Verify user authentication

### Build errors?
1. Delete `.next` folder
2. Run `npm install`
3. Check TypeScript errors: `npm run typecheck`

---

## 📚 Documentation

All documentation is in the `docs/` folder:

- **LEADS_FEATURE.md** - Leads management guide
- **IMPLEMENTATION_SUMMARY_v2.md** - Latest features
- **SECURITY.md** - Security implementation
- **EMAIL_SETUP.md** - Email configuration
- **WHATSAPP_*.md** - WhatsApp integration guides
- And more...

---

## 🤝 Contributing

### Code Style
- Use TypeScript
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/your-feature
```

---

## 📞 Support

For issues or questions:
1. Check documentation in `docs/`
2. Review migration files
3. Check Supabase logs
4. Review browser console

---

## 📄 License

Proprietary - TKV Creatographics

---

## 🎯 Roadmap

### Upcoming Features
- [ ] Full CMS for website content
- [ ] Email templates
- [ ] Automated invoicing
- [ ] Client portal
- [ ] Team collaboration
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] API documentation

---

**Last Updated**: November 3, 2025
**Version**: 2.0
**Status**: Production Ready ✅
