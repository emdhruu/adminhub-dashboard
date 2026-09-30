export const COLORS = {
  // Brand & Sidebar
  sidebarBg: '#1E293B',       
  sidebarHover: '#334155',    
  primary: '#5B5BF7',         
  primaryHover: '#4949E5',
  primaryLight: '#EEF2FF',    
  
  // Base backgrounds
  pageBg: '#F8FAFC',          
  cardBg: '#FFFFFF',          
  border: '#E2E8F0',
  borderLight: '#F1F5F9',    
  // Typography
  textPrimary: '#0F172A',     
  textSecondary: '#64748B',   
  textMuted: '#94A3B8',       
  
  // Statuses (Badges & Indicators)
  success: {
    bg: '#ECFDF5',
    text: '#10B981',
    border: '#A7F3D0',
    dot: '#10B981',
  },
  warning: {
    bg: '#FFFBEB',
    text: '#F59E0B',
    border: '#FDE68A',
    dot: '#F59E0B',
  },
  critical: {
    bg: '#FEF2F2',
    text: '#EF4444',
    border: '#FECACA',
    dot: '#EF4444',
  },
  info: {
    bg: '#EFF6FF',
    text: '#3B82F6',
    border: '#BFDBFE',
    dot: '#3B82F6',
  },
} as const;