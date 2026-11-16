// Konfigurasi Supabase & Cloudinary CV Karyasula Indonesia Steel
const SUPABASE_URL = 'https://kqdmbivizhkqoskwdmbz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZG1iaXZpemhrcW9za3dkbWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MzUyNTgsImV4cCI6MjEwODExMTI1OH0.yvwvmXDK5HmUu3dxOCc-a6WULNZTe6JJIwS5pXUp0CQ';

const LOGIN_DOMAIN = 'login.karyasula-indonesia.com';
const CLOUDINARY_CLOUD = 'mzqiclga';
const CLOUDINARY_PRESET = 'absensi_karyasula';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const $ = (id) => document.getElementById(id);

function formatTime(isoString) {
  if (!isoString) return '-';
  return new Date(isoString).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('id-ID', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
}