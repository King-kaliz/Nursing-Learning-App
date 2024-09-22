const User = require('../models/userModel');

// Handle payment subscription
exports.subscribeUser = async (req, res) => {
    const { role } = req.body;
    const user = await User.findOne({ role });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Simulate premium subscription
    user.isPaidUser = true;
    await user.save();

    res.status(200).json({ message: 'Subscription successful! You are now a premium member.' });
};
