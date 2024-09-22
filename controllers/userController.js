const User = require('../models/userModel');

// Login user (student or tutor)
exports.loginUser = async (req, res) => {
    const { role } = req.body;
    if (role === 'student' || role === 'tutor') {
        let user = await User.findOne({ role });
        if (!user) {
            user = new User({ role });
            await user.save();
        }
        return res.status(200).json({ message: `Welcome, ${role}!`, role });
    }
    res.status(400).json({ error: 'Invalid role' });
};

// Logout user
exports.logoutUser = (req, res) => {
    // Simply simulate logout
    res.status(200).json({ message: 'Logged out successfully!' });
};
