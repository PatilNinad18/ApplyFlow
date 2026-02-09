"# ApplyFlow

A comprehensive full-stack application for tracking and managing job applications. Monitor your applications, interview progress, and statistics in one place with an intuitive dashboard and detailed analytics.

## Features

- **Application Tracking**: Add, edit, and delete job applications with detailed information
- **Status Management**: Track application status (Applied, Shortlisted, Interviewing, Offer, Rejected)
- **Date Tracking**: Record when you applied and schedule interview dates
- **Dashboard Analytics**: 
  - Real-time statistics (total applications, status breakdown)
  - Visual charts (status distribution pie chart, applications timeline)
  - Recent applications widget
- **Search & Filter**: Easily search and filter applications by company, role, type, or status
- **Multiple Views**: Toggle between table and card view layouts
- **Authentication**: Secure user authentication with JWT tokens
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User Profile**: Manage your profile settings

## Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Joi** - Data validation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd personal-application-tracker/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd personal-application-tracker/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (default Vite port)

## Project Structure

```
ApplyFlow/
├── personal-application-tracker/
│   ├── backend/
│   │   ├── database/
│   │   │   ├── schema/
│   │   │   │   ├── application.schema.js
│   │   │   │   ├── user.schema.js
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── mongo.connection.js
│   │   │   └── seed.js
│   │   ├── src/
│   │   │   ├── app.js
│   │   │   ├── server.js
│   │   │   ├── config/
│   │   │   ├── middlewares/
│   │   │   │   ├── auth.middleware.js
│   │   │   │   └── error.middleware.js
│   │   │   └── modules/
│   │   │       ├── applications/
│   │   │       ├── auth/
│   │   │       ├── stats/
│   │   │       └── users/
│   │   └── package.json
│   └── frontend/
│       ├── src/
│       │   ├── api/
│       │   ├── app/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── utils/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── package.json
│       └── vite.config.js
└── README.md
```

## How to Run

### Development Mode

**Terminal 1 - Backend:**
```bash
cd personal-application-tracker/backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd personal-application-tracker/frontend
npm run dev
```

Access the application at `http://localhost:5173`

### Production Build

**Backend:**
```bash
npm run build
```

**Frontend:**
```bash
npm run build
```

## Usage

### Getting Started

1. **Sign Up**: Create a new account with email and password
2. **Log In**: Access your dashboard with your credentials
3. **Add Application**: Click "Add New Application" to record a job application
4. **Fill Details**:
   - Company Name and Role Title
   - Application Type (Job, Internship, Hackathon, etc.)
   - Status (Applied, Shortlisted, Interviewing, Offer, Rejected)
   - Applied Date (defaults to today if not specified)
   - Interview Date (optional)
   - Notes

### Dashboard
- View application statistics at a glance
- Monitor status distribution with pie chart
- See applications timeline with line chart
- Check your 3 most recent applications

### Applications Page
- View all your applications in table or card view
- Search by company, role, type, or status
- Edit applications to update status, dates, or notes
- Delete applications you no longer need

### Profile
- Update your profile information
- Manage account settings

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user

### Applications
- `GET /api/applications` - Get all user applications
- `POST /api/applications` - Create new application
- `PATCH /api/applications/:id` - Update application
- `DELETE /api/applications/:id` - Delete application

### Stats
- `GET /api/stats` - Get application statistics

### Users
- `GET /api/users/profile` - Get user profile
- `PATCH /api/users/profile` - Update user profile

## Key Features Explained

### Status Tracking
Track your applications through 5 different statuses:
- **Applied**: Initial submission
- **Shortlisted**: Passed initial screening
- **Interviewing**: In the interview process
- **Offer**: Received an offer
- **Rejected**: Application rejected

### Date Management
- **Applied Date**: When you submitted the application (respects user-provided dates)
- **Interview Date**: When your interview is scheduled

### Analytics Dashboard
- Real-time status counts updated as you modify applications
- Visual representation of application distribution
- Timeline view showing application submissions over time

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- Email reminders for interview dates
- Export applications to CSV
- Interview notes and feedback
- Salary tracking
- Company ratings and reviews
- Email integration with Gmail
- Mobile app version

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running or your Atlas connection string is correct
- Check `.env` file has the correct `MONGODB_URI`

### Port Already in Use
- Change the PORT in `.env` file
- Or kill the process using the port

### CORS Errors
- Ensure both frontend and backend servers are running
- Check the backend CORS configuration

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact & Support

For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

---

**Happy Tracking! 🚀**" 
