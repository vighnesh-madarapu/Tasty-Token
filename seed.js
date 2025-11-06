import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Item from './models/Item.js';

dotenv.config();

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tasty-token';

const sample = [
  // 🍫 Chocolates
  { category: 'Chocolates', name: 'Choco Bliss', description:'Rich milk chocolate', price:50, image:''},
  { category: 'Chocolates', name: 'Dark Decadence', description:'70% dark chocolate', price:70, image:''},
  { category: 'Chocolates', name: 'Nut Crunch', description:'Chocolate with nuts', price:60, image:''},
  { category: 'Chocolates', name: 'Minty Fresh', description:'Mint chocolate', price:55, image:''},
  { category: 'Chocolates', name: 'White Delight', description:'White chocolate', price:65, image:''},

  // 🍛 Tiffin
  { category: 'Tiffin', name: 'Idli Sambar', description:'Steamed idli with sambar', price:80, image:''},
  { category: 'Tiffin', name: 'Dosa', description:'Crispy dosa', price:90, image:''},
  { category: 'Tiffin', name: 'Upma', description:'Semolina upma', price:70, image:''},
  { category: 'Tiffin', name: 'Paratha', description:'Stuffed paratha', price:85, image:''},
  { category: 'Tiffin', name: 'Pongal', description:'South Indian pongal', price:75, image:''},

  // 🍱 Lunch
  { category: 'Lunch', name: 'Veg Thali', description:'Mixed veg thali', price:150, image:''},
  { category: 'Lunch', name: 'Chicken Biryani', description:'Spicy biryani', price:180,image:''},
  { category: 'Lunch', name: 'Paneer Butter Masala', description:'Paneer curry', price:160, image:''},
  { category: 'Lunch', name: 'Fried Rice', description:'Veg fried rice', price:120, image:''},
  { category: 'Lunch', name: 'Noodles', description:'Hakka noodles', price:110, image:''},
  { category: 'Lunch', name: 'Fish Curry', description:'Coastal fish curry', price:200, image:''},

  // 🍟 Snacks
  { category: 'Snacks', name: 'Samosa', description:'Crispy potato samosa', price:25, image:''},
  { category: 'Snacks', name: 'French Fries', description:'Crispy fries', price:70, image:''},
  { category: 'Snacks', name: 'Burger', description:'Veg burger', price:90, image:''},
  { category: 'Snacks', name: 'Paneer Pakoda', description:'Fried paneer fritters', price:100, image:''},
  { category: 'Snacks', name: 'Spring Roll', description:'Veg spring roll', price:80, image:''},
  { category: 'Snacks', name: 'Chicken 65', description:'Spicy fried chicken', price:140, image:''},
  { category: 'Snacks', name: 'Pizza Slice', description:'Cheesy slice', price:120, image:''},
  { category: 'Snacks', name: 'Mixed Nuts', description:'Roasted nuts', price:150, image:''}
];

(async () => {
  try {
    await mongoose.connect(MONGO);
    await Item.deleteMany({});
    await Item.insertMany(sample);
    console.log('🌱 Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
})();
