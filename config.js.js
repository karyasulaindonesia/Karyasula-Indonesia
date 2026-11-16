// Konfigurasi Supabase & Cloudinary CV Karyasula Indonesia Steel
const SUPABASE_URL = 'https://kqdmbivizhkqoskwdmbz.supabase.co';
const SUPABASE_KEY = 'TEMPELKAN_SUPABASE_ANON_KEY_ANDA_DI_SINI'; // Ganti dengan anon public key dari Supabase

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