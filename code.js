figma.showUI(__html__, { width: 460, height: 720, title: 'TW4 + shadcn/ui Variables' });

// ─── Tailwind 4 Color Palette ────────────────────────────────────────────────
var TW_COLORS = {
  slate:   { 50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',300:'#cbd5e1',400:'#94a3b8',500:'#64748b',600:'#475569',700:'#334155',800:'#1e293b',900:'#0f172a',950:'#020617' },
  gray:    { 50:'#f9fafb',100:'#f3f4f6',200:'#e5e7eb',300:'#d1d5db',400:'#9ca3af',500:'#6b7280',600:'#4b5563',700:'#374151',800:'#1f2937',900:'#111827',950:'#030712' },
  zinc:    { 50:'#fafafa',100:'#f4f4f5',200:'#e4e4e7',300:'#d4d4d8',400:'#a1a1aa',500:'#71717a',600:'#52525b',700:'#3f3f46',800:'#27272a',900:'#18181b',950:'#09090b' },
  neutral: { 50:'#fafafa',100:'#f5f5f5',200:'#e5e5e5',300:'#d4d4d4',400:'#a3a3a3',500:'#737373',600:'#525252',700:'#404040',800:'#262626',900:'#171717',950:'#0a0a0a' },
  stone:   { 50:'#fafaf9',100:'#f5f5f4',200:'#e7e5e4',300:'#d6d3d1',400:'#a8a29e',500:'#78716c',600:'#57534e',700:'#44403c',800:'#292524',900:'#1c1917',950:'#0c0a09' },
  red:     { 50:'#fef2f2',100:'#fee2e2',200:'#fecaca',300:'#fca5a5',400:'#f87171',500:'#ef4444',600:'#dc2626',700:'#b91c1c',800:'#991b1b',900:'#7f1d1d',950:'#450a0a' },
  orange:  { 50:'#fff7ed',100:'#ffedd5',200:'#fed7aa',300:'#fdba74',400:'#fb923c',500:'#f97316',600:'#ea580c',700:'#c2410c',800:'#9a3412',900:'#7c2d12',950:'#431407' },
  amber:   { 50:'#fffbeb',100:'#fef3c7',200:'#fde68a',300:'#fcd34d',400:'#fbbf24',500:'#f59e0b',600:'#d97706',700:'#b45309',800:'#92400e',900:'#78350f',950:'#451a03' },
  yellow:  { 50:'#fefce8',100:'#fef9c3',200:'#fef08a',300:'#fde047',400:'#facc15',500:'#eab308',600:'#ca8a04',700:'#a16207',800:'#854d0e',900:'#713f12',950:'#422006' },
  lime:    { 50:'#f7fee7',100:'#ecfccb',200:'#d9f99d',300:'#bef264',400:'#a3e635',500:'#84cc16',600:'#65a30d',700:'#4d7c0f',800:'#3f6212',900:'#365314',950:'#1a2e05' },
  green:   { 50:'#f0fdf4',100:'#dcfce7',200:'#bbf7d0',300:'#86efac',400:'#4ade80',500:'#22c55e',600:'#16a34a',700:'#15803d',800:'#166534',900:'#14532d',950:'#052e16' },
  emerald: { 50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',500:'#10b981',600:'#059669',700:'#047857',800:'#065f46',900:'#064e3b',950:'#022c22' },
  teal:    { 50:'#f0fdfa',100:'#ccfbf1',200:'#99f6e4',300:'#5eead4',400:'#2dd4bf',500:'#14b8a6',600:'#0d9488',700:'#0f766e',800:'#115e59',900:'#134e4a',950:'#042f2e' },
  cyan:    { 50:'#ecfeff',100:'#cffafe',200:'#a5f3fc',300:'#67e8f9',400:'#22d3ee',500:'#06b6d4',600:'#0891b2',700:'#0e7490',800:'#155e75',900:'#164e63',950:'#083344' },
  sky:     { 50:'#f0f9ff',100:'#e0f2fe',200:'#bae6fd',300:'#7dd3fc',400:'#38bdf8',500:'#0ea5e9',600:'#0284c7',700:'#0369a1',800:'#075985',900:'#0c4a6e',950:'#082f49' },
  blue:    { 50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',300:'#93c5fd',400:'#60a5fa',500:'#3b82f6',600:'#2563eb',700:'#1d4ed8',800:'#1e40af',900:'#1e3a8a',950:'#172554' },
  indigo:  { 50:'#eef2ff',100:'#e0e7ff',200:'#c7d2fe',300:'#a5b4fc',400:'#818cf8',500:'#6366f1',600:'#4f46e5',700:'#4338ca',800:'#3730a3',900:'#312e81',950:'#1e1b4b' },
  violet:  { 50:'#f5f3ff',100:'#ede9fe',200:'#ddd6fe',300:'#c4b5fd',400:'#a78bfa',500:'#8b5cf6',600:'#7c3aed',700:'#6d28d9',800:'#5b21b6',900:'#4c1d95',950:'#2e1065' },
  purple:  { 50:'#faf5ff',100:'#f3e8ff',200:'#e9d5ff',300:'#d8b4fe',400:'#c084fc',500:'#a855f7',600:'#9333ea',700:'#7e22ce',800:'#6b21a8',900:'#581c87',950:'#3b0764' },
  fuchsia: { 50:'#fdf4ff',100:'#fae8ff',200:'#f5d0fe',300:'#f0abfc',400:'#e879f9',500:'#d946ef',600:'#c026d3',700:'#a21caf',800:'#86198f',900:'#701a75',950:'#4a044e' },
  pink:    { 50:'#fdf2f8',100:'#fce7f3',200:'#fbcfe8',300:'#f9a8d4',400:'#f472b6',500:'#ec4899',600:'#db2777',700:'#be185d',800:'#9d174d',900:'#831843',950:'#500724' },
  rose:    { 50:'#fff1f2',100:'#ffe4e6',200:'#fecdd3',300:'#fda4af',400:'#fb7185',500:'#f43f5e',600:'#e11d48',700:'#be123c',800:'#9f1239',900:'#881337',950:'#4c0519' }
};

// ─── Semantic Tokens (per shadcn/ui theme) ───────────────────────────────────
// Neutral themes swap the base scale; colored themes keep zinc neutral but
// override primary, primary-foreground and ring.
var COLORED_PRIMARIES = {
  rose:   { priL:'rose-700',   priD:'rose-400',   pfL:'rose-50',    pfD:'rose-950',  ringL:'rose-500',   ringD:'rose-300'   },
  orange: { priL:'orange-600', priD:'orange-400', pfL:'orange-50',  pfD:'orange-950',ringL:'orange-500', ringD:'orange-300' },
  blue:   { priL:'blue-600',   priD:'blue-400',   pfL:'blue-50',    pfD:'blue-950',  ringL:'blue-500',   ringD:'blue-300'   },
  green:  { priL:'green-700',  priD:'green-400',  pfL:'green-50',   pfD:'green-950', ringL:'green-500',  ringD:'green-300'  },
  violet: { priL:'violet-600', priD:'violet-400', pfL:'violet-50',  pfD:'violet-950',ringL:'violet-500', ringD:'violet-300' },
  yellow: { priL:'yellow-500', priD:'yellow-300', pfL:'yellow-950', pfD:'yellow-950',ringL:'yellow-500', ringD:'yellow-300' },
  red:    { priL:'red-600',    priD:'red-400',    pfL:'red-50',     pfD:'red-950',   ringL:'red-500',    ringD:'red-300'    },
};

function getSemanticTokens(theme) {
  var n = ['zinc','slate','stone','gray','neutral'].indexOf(theme) !== -1 ? theme : 'zinc';
  var cp = COLORED_PRIMARIES[theme];
  var priL  = cp ? cp.priL  : n + '-900';
  var priD  = cp ? cp.priD  : n + '-50';
  var pfL   = cp ? cp.pfL   : n + '-50';
  var pfD   = cp ? cp.pfD   : n + '-900';
  var ringL = cp ? cp.ringL : n + '-900';
  var ringD = cp ? cp.ringD : n + '-300';
  return {
    'background':             { light:'white',    dark: n+'-950' },
    'foreground':             { light:n+'-950',   dark: n+'-50'  },
    'card':                   { light:'white',    dark: n+'-950' },
    'card-foreground':        { light:n+'-950',   dark: n+'-50'  },
    'popover':                { light:'white',    dark: n+'-950' },
    'popover-foreground':     { light:n+'-950',   dark: n+'-50'  },
    'primary':                { light:priL,       dark: priD     },
    'primary-foreground':     { light:pfL,        dark: pfD      },
    'secondary':              { light:n+'-100',   dark: n+'-800' },
    'secondary-foreground':   { light:n+'-900',   dark: n+'-50'  },
    'muted':                  { light:n+'-100',   dark: n+'-800' },
    'muted-foreground':       { light:n+'-500',   dark: n+'-400' },
    'accent':                 { light:n+'-100',   dark: n+'-800' },
    'accent-foreground':      { light:n+'-900',   dark: n+'-50'  },
    'destructive':            { light:'red-500',  dark:'red-900' },
    'destructive-foreground': { light:n+'-50',    dark: n+'-50'  },
    'border':                 { light:n+'-200',   dark: n+'-800' },
    'input':                  { light:n+'-200',   dark: n+'-800' },
    'ring':                   { light:ringL,      dark: ringD    },
    'chart-1':                { light:'orange-500',dark:'orange-400' },
    'chart-2':                { light:'teal-500',  dark:'teal-400'   },
    'chart-3':                { light:'blue-500',  dark:'blue-400'   },
    'chart-4':                { light:'violet-500',dark:'violet-400' },
    'chart-5':                { light:'red-500',   dark:'red-400'    },
  };
}
// Keep a fallback for any code that still references SEMANTIC_TOKENS directly
var SEMANTIC_TOKENS = getSemanticTokens('zinc');

// ─── Component Token Definitions ─────────────────────────────────────────────
var COMPONENT_DEFINITIONS = {
  buttongroup: { name:'Button Group', group:'Controls', tokens:{} },
  button: { name:'Button', group:'Controls',
    tokens: {
      'button/default/background':           {light:'alias:primary',               dark:'alias:primary'},
      'button/default/foreground':           {light:'alias:primary-foreground',    dark:'alias:primary-foreground'},
      'button/default/hover-background':     {light:'zinc-700',                    dark:'zinc-200'},
      'button/destructive/background':       {light:'alias:destructive',           dark:'alias:destructive'},
      'button/destructive/foreground':       {light:'alias:destructive-foreground',dark:'alias:destructive-foreground'},
      'button/destructive/hover-background': {light:'red-600',                     dark:'red-800'},
      'button/outline/background':           {light:'alias:background',            dark:'alias:background'},
      'button/outline/foreground':           {light:'alias:foreground',            dark:'alias:foreground'},
      'button/outline/border':               {light:'alias:border',                dark:'alias:border'},
      'button/outline/hover-background':     {light:'alias:accent',                dark:'alias:accent'},
      'button/outline/hover-foreground':     {light:'alias:accent-foreground',     dark:'alias:accent-foreground'},
      'button/secondary/background':         {light:'alias:secondary',             dark:'alias:secondary'},
      'button/secondary/foreground':         {light:'alias:secondary-foreground',  dark:'alias:secondary-foreground'},
      'button/secondary/hover-background':   {light:'zinc-200',                    dark:'zinc-700'},
      'button/ghost/background':             {light:'transparent',                 dark:'transparent'},
      'button/ghost/foreground':             {light:'alias:foreground',            dark:'alias:foreground'},
      'button/ghost/hover-background':       {light:'alias:accent',                dark:'alias:accent'},
      'button/ghost/hover-foreground':       {light:'alias:accent-foreground',     dark:'alias:accent-foreground'},
      'button/link/foreground':              {light:'alias:primary',               dark:'alias:primary'},
      'button/link/hover-foreground':        {light:'zinc-700',                    dark:'zinc-200'},
    }
  },
  formfield: { name:'Form Field', group:'Forms',
    tokens: {}
  },
  label: { name:'Label', group:'Forms',
    tokens: {
      'label/foreground':  {light:'alias:foreground',       dark:'alias:foreground'},
      'label/muted':       {light:'alias:muted-foreground', dark:'alias:muted-foreground'},
      'label/required':    {light:'alias:destructive',      dark:'alias:destructive'},
    }
  },
  input: { name:'Input', group:'Forms',
    tokens: {
      'input/background':          {light:'alias:background',       dark:'alias:background'},
      'input/border':              {light:'alias:input',            dark:'alias:input'},
      'input/text':                {light:'alias:foreground',       dark:'alias:foreground'},
      'input/placeholder':         {light:'alias:muted-foreground', dark:'alias:muted-foreground'},
      'input/ring':                {light:'alias:ring',             dark:'alias:ring'},
      'input/disabled-background': {light:'zinc-100',               dark:'zinc-800'},
      'input/disabled-text':       {light:'zinc-400',               dark:'zinc-600'},
    }
  },
  switch: { name:'Switch', group:'Forms',
    tokens: {
      'switch/track-checked':   {light:'alias:primary', dark:'alias:primary'},
      'switch/track-unchecked': {light:'alias:input',   dark:'alias:input'},
      'switch/thumb':           {light:'white',          dark:'white'},
      'switch/disabled-track':  {light:'zinc-200',       dark:'zinc-700'},
      'switch/disabled-thumb':  {light:'zinc-400',       dark:'zinc-500'},
    }
  },
  checkbox: { name:'Checkbox', group:'Forms',
    tokens: {
      'checkbox/background-checked':  {light:'alias:primary',            dark:'alias:primary'},
      'checkbox/background-default':  {light:'alias:background',         dark:'alias:background'},
      'checkbox/border':              {light:'alias:primary',            dark:'alias:primary'},
      'checkbox/indicator':           {light:'alias:primary-foreground', dark:'alias:primary-foreground'},
      'checkbox/disabled':            {light:'zinc-200',                  dark:'zinc-700'},
    }
  },
  select: { name:'Select', group:'Forms',
    tokens: {
      'select/background':       {light:'alias:background',        dark:'alias:background'},
      'select/border':           {light:'alias:input',             dark:'alias:input'},
      'select/text':             {light:'alias:foreground',        dark:'alias:foreground'},
      'select/placeholder':      {light:'alias:muted-foreground',  dark:'alias:muted-foreground'},
      'select/item-hover':       {light:'alias:accent',            dark:'alias:accent'},
      'select/item-hover-text':  {light:'alias:accent-foreground', dark:'alias:accent-foreground'},
      'select/item-selected':    {light:'alias:primary',           dark:'alias:primary'},
      'select/popup-background': {light:'alias:popover',           dark:'alias:popover'},
      'select/popup-border':     {light:'alias:border',            dark:'alias:border'},
    }
  },
  textarea: { name:'Textarea', group:'Forms',
    tokens: {
      'textarea/background':  {light:'alias:background',       dark:'alias:background'},
      'textarea/border':      {light:'alias:input',            dark:'alias:input'},
      'textarea/text':        {light:'alias:foreground',       dark:'alias:foreground'},
      'textarea/placeholder': {light:'alias:muted-foreground', dark:'alias:muted-foreground'},
      'textarea/ring':        {light:'alias:ring',             dark:'alias:ring'},
    }
  },
  radio: { name:'Radio Group', group:'Forms',
    tokens: {
      'radio/indicator':  {light:'alias:primary',    dark:'alias:primary'},
      'radio/border':     {light:'alias:primary',    dark:'alias:primary'},
      'radio/background': {light:'alias:background', dark:'alias:background'},
      'radio/disabled':   {light:'zinc-200',          dark:'zinc-700'},
    }
  },
  slider: { name:'Slider', group:'Forms',
    tokens: {
      'slider/track-background': {light:'alias:secondary', dark:'alias:secondary'},
      'slider/range':            {light:'alias:primary',   dark:'alias:primary'},
      'slider/thumb':            {light:'alias:background',dark:'alias:background'},
      'slider/thumb-border':     {light:'alias:primary',   dark:'alias:primary'},
    }
  },
  badge: { name:'Badge', group:'Display',
    tokens: {
      'badge/default/background':     {light:'alias:primary',               dark:'alias:primary'},
      'badge/default/foreground':     {light:'alias:primary-foreground',    dark:'alias:primary-foreground'},
      'badge/secondary/background':   {light:'alias:secondary',             dark:'alias:secondary'},
      'badge/secondary/foreground':   {light:'alias:secondary-foreground',  dark:'alias:secondary-foreground'},
      'badge/destructive/background': {light:'alias:destructive',           dark:'alias:destructive'},
      'badge/destructive/foreground': {light:'alias:destructive-foreground',dark:'alias:destructive-foreground'},
      'badge/outline/border':         {light:'alias:foreground',            dark:'alias:foreground'},
      'badge/outline/foreground':     {light:'alias:foreground',            dark:'alias:foreground'},
    }
  },
  card: { name:'Card', group:'Display',
    tokens: {
      'card/background':  {light:'alias:card',            dark:'alias:card'},
      'card/foreground':  {light:'alias:card-foreground', dark:'alias:card-foreground'},
      'card/border':      {light:'alias:border',          dark:'alias:border'},
    }
  },
  alert: { name:'Alert', group:'Feedback',
    tokens: {
      'alert/default/background':     {light:'alias:background',  dark:'alias:background'},
      'alert/default/foreground':     {light:'alias:foreground',  dark:'alias:foreground'},
      'alert/default/border':         {light:'alias:border',      dark:'alias:border'},
      'alert/destructive/background': {light:'alias:background',  dark:'alias:background'},
      'alert/destructive/border':     {light:'alias:destructive', dark:'alias:destructive'},
      'alert/destructive/foreground': {light:'alias:destructive', dark:'alias:destructive'},
      'alert/destructive/icon':       {light:'alias:destructive', dark:'alias:destructive'},
    }
  },
  dialog: { name:'Dialog', group:'Overlay',
    tokens: {
      'dialog/overlay':    {light:'black-60',        dark:'black-80'},
      'dialog/background': {light:'alias:background',dark:'alias:background'},
      'dialog/foreground': {light:'alias:foreground',dark:'alias:foreground'},
      'dialog/border':     {light:'alias:border',    dark:'alias:border'},
    }
  },
  toast: { name:'Toast', group:'Feedback',
    tokens: {
      'toast/background':             {light:'alias:background',           dark:'alias:background'},
      'toast/foreground':             {light:'alias:foreground',           dark:'alias:foreground'},
      'toast/border':                 {light:'alias:border',               dark:'alias:border'},
      'toast/destructive/background': {light:'alias:destructive',          dark:'alias:destructive'},
      'toast/destructive/foreground': {light:'alias:destructive-foreground',dark:'alias:destructive-foreground'},
      'toast/action-background':      {light:'alias:secondary',            dark:'alias:secondary'},
      'toast/action-foreground':      {light:'alias:secondary-foreground', dark:'alias:secondary-foreground'},
    }
  },
};

// ─── shadcn/ui Component Styles ───────────────────────────────────────────────
// Drives border radius, sizing and spacing for canvas components
// Values match shadcn/ui v4 style presets (radius, density, sizing)
var STYLE_PRESETS = {
  //        radius  btnH  inputH inputW  fz  badgeH badgeR switchH switchW  taH  cardR alertR
  vega:  { radius:6,  btnH:36, inputH:40, inputW:280, fontSize:13, badgeH:22, badgeR:999, switchH:24, switchW:44, textareH:100, cardR:8,  alertR:6  },
  nova:  { radius:6,  btnH:32, inputH:36, inputW:280, fontSize:12, badgeH:20, badgeR:999, switchH:22, switchW:40, textareH:88,  cardR:8,  alertR:6  },
  maia:  { radius:16, btnH:40, inputH:44, inputW:280, fontSize:13, badgeH:26, badgeR:999, switchH:28, switchW:52, textareH:108, cardR:20, alertR:16 },
  lyra:  { radius:0,  btnH:36, inputH:40, inputW:280, fontSize:13, badgeH:22, badgeR:0,   switchH:24, switchW:44, textareH:100, cardR:0,  alertR:0  },
  mira:  { radius:4,  btnH:28, inputH:32, inputW:280, fontSize:11, badgeH:18, badgeR:999, switchH:20, switchW:36, textareH:80,  cardR:6,  alertR:4  },
};
// Active style — set by buildCanvasComponents before builders run
var S = STYLE_PRESETS.vega;

// ─── Component page groupings ─────────────────────────────────────────────────
var COMPONENT_GROUPS = {
  'Controls': ['button','buttongroup'],
  'Forms':    ['label','input','textarea','select','checkbox','radio','switch','slider','formfield'],
  'Display':  ['badge','card'],
  'Feedback': ['alert','toast'],
  'Overlay':  ['dialog'],
};

// ─── Icon libraries ───────────────────────────────────────────────────────────
// SVG inner HTML only (no <svg> wrapper). Lucide v0.462 • stroke-based 24×24.
var LUCIDE_ICONS = {
  // Navigation & layout
  'home':            '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'menu':            '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'grid':            '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  'list':            '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
  'sidebar':         '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/>',
  'layout-dashboard':'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  // Arrows & chevrons
  'chevron-up':      '<path d="m18 15-6-6-6 6"/>',
  'chevron-down':    '<path d="m6 9 6 6 6-6"/>',
  'chevron-left':    '<path d="m15 18-6-6 6-6"/>',
  'chevron-right':   '<path d="m9 18 6-6-6-6"/>',
  'arrow-up':        '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  'arrow-down':      '<path d="m19 12-7 7-7-7"/><path d="M12 5v14"/>',
  'arrow-left':      '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  'arrow-right':     '<path d="m5 12 7 7 7-7"/><path d="M5 12h14"/>',
  'move':            '<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/>',
  // Actions
  'search':          '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  'plus':            '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'minus':           '<path d="M5 12h14"/>',
  'x':               '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'check':           '<path d="M20 6 9 17l-5-5"/>',
  'edit':            '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  'trash-2':         '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  'copy':            '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  'download':        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  'upload':          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
  'share-2':         '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  'refresh-cw':      '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  'filter':          '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  'settings':        '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  // Status & feedback
  'alert-circle':    '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  'alert-triangle':  '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'check-circle':    '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  'info':            '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'x-circle':        '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  'loader':          '<path d="M12 2v4"/><path d="m16.24 7.76 2.83-2.83"/><path d="M18 12h4"/><path d="m16.24 16.24 2.83 2.83"/><path d="M12 18v4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M2 12h4"/><path d="m4.93 4.93 2.83 2.83"/>',
  // Communication
  'bell':            '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  'mail':            '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'phone':           '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.91 3.4 2 2 0 0 1 3.89 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'message-circle':  '<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>',
  'send':            '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  // User
  'user':            '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'users':           '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'log-in':          '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>',
  'log-out':         '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  // Security
  'eye':             '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off':         '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',
  'lock':            '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'unlock':          '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  'shield':          '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  // Content
  'star':            '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'heart':           '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
  'bookmark':        '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
  'tag':             '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  'more-vertical':   '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  // Files & media
  'file':            '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><polyline points="14 2 14 8 20 8"/>',
  'folder':          '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"/>',
  'image':           '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  'video':           '<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>',
  'music':           '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  'paperclip':       '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  // Date & time
  'calendar':        '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
  'clock':           '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  // Links & web
  'link':            '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  'external-link':   '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>',
  'globe':           '<circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  'map-pin':         '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  // Theme
  'sun':             '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  'moon':            '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
  'zap':             '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
};

// Iconnoir v2 • stroke-based 24×24 • stroke-width 1.5
var ICONNOIR_ICONS = {
  // Navigation
  'home-simple':       '<path stroke-width="1.5" d="M3 10.182V20a1 1 0 0 0 1 1h5v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h5a1 1 0 0 0 1-1V10.182a1 1 0 0 0-.382-.782l-9-7a1 1 0 0 0-1.236 0l-9 7A1 1 0 0 0 3 10.182z"/>',
  'nav-arrow-right':   '<path stroke-width="1.5" d="M9 6l6 6-6 6"/>',
  'nav-arrow-left':    '<path stroke-width="1.5" d="M15 6l-6 6 6 6"/>',
  'nav-arrow-up':      '<path stroke-width="1.5" d="M6 15l6-6 6 6"/>',
  'nav-arrow-down':    '<path stroke-width="1.5" d="M6 9l6 6 6-6"/>',
  'page':              '<path stroke-width="1.5" d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path stroke-width="1.5" d="M15 2v5h5"/>',
  'multi-page':        '<path stroke-width="1.5" d="M4 6h13l3 3v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/><path stroke-width="1.5" d="M7 6V4a1 1 0 0 1 1-1h11l3 3v11a1 1 0 0 1-1 1h-2"/>',
  'grid-add':          '<path stroke-width="1.5" d="M3 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm0 11a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3zm11 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zm3-8v-2m0 0V4m0 2h-2m2 0h2"/>',
  // Actions
  'search':            '<path stroke-width="1.5" d="M17 17l4 4M3 11a8 8 0 1 0 16 0A8 8 0 0 0 3 11z"/>',
  'plus':              '<path stroke-width="1.5" d="M6 12h6m6 0h-6m0 0V6m0 6v6"/>',
  'minus':             '<path stroke-width="1.5" d="M6 12h12"/>',
  'cancel':            '<path stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/>',
  'check':             '<path stroke-width="1.5" d="M5 13l4 4L19 7"/>',
  'edit-pencil':       '<path stroke-width="1.5" d="M14.363 5.652l1.48-1.48a2 2 0 0 1 2.829 0l1.414 1.414a2 2 0 0 1 0 2.828l-1.48 1.48M14.363 5.652l-9.675 9.675a2 2 0 0 0-.578 1.283l-.23 2.44a1 1 0 0 0 1.086 1.087l2.44-.23a2 2 0 0 0 1.282-.578l9.675-9.677M14.363 5.652l4.243 4.243"/>',
  'trash':             '<path stroke-width="1.5" d="M20 9l-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a1 1 0 0 1 1-1h4.75a1 1 0 0 1 1 1v2m-6.75 0h6.75"/>',
  'download':          '<path stroke-width="1.5" d="M12 13V3M12 13l-3-3m3 3 3-3M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2"/>',
  'upload':            '<path stroke-width="1.5" d="M12 11V21M12 11l-3 3m3-3 3 3M4 7v-.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V7"/>',
  'share-ios':         '<path stroke-width="1.5" d="M12 13V3m0 0L8 7m4-4 4 4"/><path stroke-width="1.5" d="M8 13H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3"/>',
  'refresh':           '<path stroke-width="1.5" d="M21.888 13.5C21.164 18.307 17.013 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2c4.1 0 7.625 2.468 9.168 6M22 7V2l-3 3-3-3"/>',
  'filter-list':       '<path stroke-width="1.5" d="M3 5h18M7 12h10m-7 7h4"/>',
  'settings':          '<path stroke-width="1.5" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path stroke-width="1.5" d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.784-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.784-1.453 2.657 1.08L11 22h2l.604-2.401 2.651-1.098C16.697 19.48 18 20 18 20l2-2-1.484-1.75 1.098-2.652L22 13v-2l-2.378-.605z"/>',
  // Status
  'warning-triangle':  '<path stroke-width="1.5" d="M20.043 21H3.957c-1.538 0-2.5-1.664-1.734-2.997l8.043-13.988c.77-1.337 2.699-1.337 3.468 0l8.043 13.988C22.543 19.336 21.58 21 20.043 21z"/><path stroke-width="1.5" d="M12 9v4"/><path stroke-width="1.5" d="M12 17.01l.01-.011"/>',
  'info-circle':       '<path stroke-width="1.5" d="M12 11.5v5M12 7.51l.01-.011M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>',
  'check-circle':      '<path stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path stroke-width="1.5" d="M7 12l3.5 3.5 5.5-7"/>',
  'xmark-circle':      '<path stroke-width="1.5" d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>',
  'clock':             '<path stroke-width="1.5" d="M12 6v6.349L15.5 15M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/>',
  'hourglass':         '<path stroke-width="1.5" d="M6.5 22h11m-11-20h11M7 2v4l5 4-5 4v4m10-16v4l-5 4 5 4v4"/>',
  // Communication
  'bell':              '<path stroke-width="1.5" d="M18 8.5a6 6 0 1 0-12 0c0 4.314-2 5.5-2 8h16c0-2.5-2-3.714-2-8z"/><path stroke-width="1.5" d="M9.5 21a2.5 2.5 0 0 0 5 0"/>',
  'mail':              '<path stroke-width="1.5" d="M2 7l10 7L22 7M2 7v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7M2 7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"/>',
  'chat-bubble':       '<path stroke-width="1.5" d="M8 13.5h4m-4-4h8M3.387 16.2L2.063 20.5 7 19.15M3.6 12c0-4.97 3.79-9 8.4-9 4.613 0 8.4 4.03 8.4 9s-3.787 9-8.4 9c-1.312 0-2.55-.318-3.64-.88L3.6 21v-9z"/>',
  'send-mail':         '<path stroke-width="1.5" d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>',
  // User
  'user':              '<path stroke-width="1.5" d="M12 2C9.239 2 7 4.239 7 7s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm-9 18c0-4.418 4.03-8 9-8s9 3.582 9 8"/>',
  'group':             '<path stroke-width="1.5" d="M1 20c0-3.314 2.686-6 6-6m11 6c0-3.314-2.686-6-6-6M13 8A4 4 0 1 1 5 8a4 4 0 0 1 8 0zm5 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>',
  'log-in':            '<path stroke-width="1.5" d="M9 12h12m0 0l-3.5-3.5M21 12l-3.5 3.5"/><path stroke-width="1.5" d="M11 7.825V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.825"/>',
  'log-out':           '<path stroke-width="1.5" d="M12 12h12m0 0l-3.5-3.5M24 12l-3.5 3.5M3 12h4"/><path stroke-width="1.5" d="M15 7.825V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.825"/>',
  // Security
  'eye-solid':         '<path stroke-width="1.5" d="M3 12s3.6-7 9-7 9 7 9 7-3.6 7-9 7-9-7-9-7z"/><path stroke-width="1.5" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>',
  'eye-off':           '<path stroke-width="1.5" d="M3 3l18 18M10.5 10.677a3 3 0 0 0 3.823 3.823M6.362 6.619C4.392 8.048 3 10 3 12s3.6 7 9 7c1.85 0 3.515-.603 4.896-1.545M19.032 16.824C20.93 15.394 22 13.349 22 12c0-2-3.6-7-9-7-1.23 0-2.38.274-3.418.724"/>',
  'lock':              '<path stroke-width="1.5" d="M16 12H8m8 0V8a4 4 0 0 0-8 0v4m8 0h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1H8"/>',
  'shield-check':      '<path stroke-width="1.5" d="M9 12l2 2 4-4"/><path stroke-width="1.5" d="M12 3L4 6v6c0 4.418 3.582 8 8 8s8-3.582 8-8V6l-8-3z"/>',
  // Content & media
  'media-image':       '<path stroke-width="1.5" d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6z"/><path stroke-width="1.5" d="M3 16l7-7 4 4 2-2 5 5"/><path stroke-width="1.5" d="M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>',
  'bookmark':          '<path stroke-width="1.5" d="M6 4v17l6-4 6 4V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/>',
  'heart':             '<path stroke-width="1.5" d="M22 8.862A5.69 5.69 0 0 1 20.761 13c-1.348 1.87-5.453 5.36-7.963 7.37a1.144 1.144 0 0 1-1.596 0C8.692 18.36 4.587 14.87 3.24 13A5.69 5.69 0 0 1 2 8.862 5.888 5.888 0 0 1 7.893 3c1.988 0 3.716 1.002 4.107 2.155C12.391 4.002 14.12 3 16.107 3A5.888 5.888 0 0 1 22 8.862z"/>',
  'star':              '<path stroke-width="1.5" d="M12 1.5l3.092 6.27 6.908.997-5 4.876 1.18 6.887L12 17.277l-6.18 3.253 1.18-6.887-5-4.876 6.908-.997L12 1.5z"/>',
  'tag':               '<path stroke-width="1.5" d="M2 4.6A2.6 2.6 0 0 1 4.6 2h6.04a2.6 2.6 0 0 1 1.838.762l8.8 8.8a2.6 2.6 0 0 1 0 3.676l-5.802 5.8a2.6 2.6 0 0 1-3.676 0l-8.8-8.8A2.6 2.6 0 0 1 2 10.638V4.6z"/><path stroke-width="1.5" d="M7 8.01l.01-.011"/>',
  // Misc
  'sun-light':         '<path stroke-width="1.5" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 2v1m0 18v1M4.22 4.22l.7.7m12.16 12.16.7.7M2 12h1m18 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7"/>',
  'half-moon':         '<path stroke-width="1.5" d="M12 3a6.36 6.36 0 0 0 0 18A10 10 0 1 1 12 3z"/>',
  'flash':             '<path stroke-width="1.5" d="M13 2L4.5 13.5H11L10.5 22 19 10.5H13L13 2z"/>',
  'link':              '<path stroke-width="1.5" d="M10.5 13.5A5 5 0 0 0 17 20a5 5 0 1 0-3.536-8.535L12 13m1.5-2.5A5 5 0 0 0 7 4a5 5 0 1 0 3.536 8.535L12 11"/>',
  'globe':             '<path stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path stroke-width="1.5" d="M12 2c-2.796 2.293-4.5 5.906-4.5 10S9.204 19.707 12 22c2.796-2.293 4.5-5.906 4.5-10S14.796 4.293 12 2z"/><path stroke-width="1.5" d="M2 12h20"/>',
  'map-pin':           '<path stroke-width="1.5" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/><path stroke-width="1.5" d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',
  'calendar':          '<path stroke-width="1.5" d="M15 4V2m0 2v2m0-2H9M2 9h20M9 4V2m0 2v2M3 13h1m3 0h1m3 0h1m3 0h1m-9 4h1m3 0h1m3 0h1M3 6.4V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/>',
};

// ─── Icon page builder ────────────────────────────────────────────────────────
function buildIconPage(page, libraryName, icons) {
  var ICON_SZ = 24;
  var CELL    = 48; // cell size for padding around icon
  var COLS    = 16;
  var PAD     = 24;
  var keys    = Object.keys(icons);
  var rows    = Math.ceil(keys.length / COLS);

  var svgWrap = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';

  var allComps = [];

  keys.forEach(function(name) {
    var comp = figma.createComponent();
    comp.name = libraryName + '/' + name;
    comp.resize(ICON_SZ, ICON_SZ);
    comp.fills = [];

    var svgStr = svgWrap + icons[name] + '</svg>';
    var node   = figma.createNodeFromSvg(svgStr);
    node.resize(ICON_SZ, ICON_SZ);
    node.x = 0; node.y = 0;
    node.name = 'vector';
    comp.appendChild(node);
    allComps.push(comp);
    // Register in cache by short name so getIcon() can find it
    ICON_CACHE[name] = comp;
  });

  // Arrange in a labelled grid frame — no combineAsVariants, each icon is standalone
  var gridW = PAD * 2 + COLS * CELL;
  var gridH = PAD * 2 + rows * CELL + 32;
  var frame = figma.createFrame();
  frame.name = libraryName;
  frame.resize(gridW, gridH);
  frame.fills = [solidPaint('#ffffff')];
  frame.x = 40; frame.y = 40;
  page.appendChild(frame);

  // Library title
  var title = figma.createText();
  title.fontName  = { family: CANVAS_FONT, style: 'Bold' };
  title.fontSize  = 14;
  title.characters = libraryName + ' — ' + keys.length + ' icons';
  title.fills     = [{ type:'SOLID', color:rgb('#18181b') }];
  title.x = PAD; title.y = PAD - 18;
  frame.appendChild(title);

  allComps.forEach(function(comp, i) {
    var col = i % COLS;
    var row = Math.floor(i / COLS);
    comp.x = PAD + col * CELL + Math.round((CELL - ICON_SZ) / 2);
    comp.y = PAD + 20 + row * CELL + Math.round((CELL - ICON_SZ) / 2);
    frame.appendChild(comp);
  });

  return frame;
}

function buildLucideIconsPage(page) {
  return buildIconPage(page, 'Lucide', LUCIDE_ICONS);
}

function buildIconnoirIconsPage(page) {
  return buildIconPage(page, 'Iconnoir', ICONNOIR_ICONS);
}

// ─── Color helpers ────────────────────────────────────────────────────────────
function hexToRgba(hex, alpha) {
  if (alpha === undefined) alpha = 1;
  return {
    r: parseInt(hex.slice(1,3),16)/255,
    g: parseInt(hex.slice(3,5),16)/255,
    b: parseInt(hex.slice(5,7),16)/255,
    a: alpha
  };
}

function resolveColorKey(key) {
  if (key === 'white')       return {r:1,g:1,b:1,a:1};
  if (key === 'black')       return {r:0,g:0,b:0,a:1};
  if (key === 'transparent') return {r:0,g:0,b:0,a:0};
  if (key === 'black-60')    return {r:0,g:0,b:0,a:0.6};
  if (key === 'black-80')    return {r:0,g:0,b:0,a:0.8};
  var parts = key.split('-');
  var shade = parseInt(parts[parts.length-1]);
  var name  = parts.slice(0, parts.length-1).join('-');
  var hex = TW_COLORS[name] && TW_COLORS[name][shade];
  if (!hex) throw new Error('Unknown color key: '+key);
  return hexToRgba(hex);
}

function sendProgress(message, percent) {
  figma.ui.postMessage({ type:'progress', message:message, percent:percent });
}

function removeExistingCollection(name) {
  figma.variables.getLocalVariableCollections().forEach(function(c) {
    if (c.name === name) c.remove();
  });
}

// ─── Variable Collections ─────────────────────────────────────────────────────
function createPrimitivesCollection() {
  removeExistingCollection('Tailwind / Primitives');
  var col = figma.variables.createVariableCollection('Tailwind / Primitives');
  var mid = col.defaultModeId;
  col.renameMode(mid, 'Default');
  var map = {};
  Object.keys(TW_COLORS).forEach(function(name) {
    Object.keys(TW_COLORS[name]).forEach(function(shade) {
      var v = figma.variables.createVariable(name+'/'+shade, col, 'COLOR');
      v.setValueForMode(mid, hexToRgba(TW_COLORS[name][shade]));
      map[name+'-'+shade] = v.id;
    });
  });
  var black = figma.variables.createVariable('black', col, 'COLOR');
  black.setValueForMode(mid, {r:0,g:0,b:0,a:1});
  map['black'] = black.id;
  var white = figma.variables.createVariable('white', col, 'COLOR');
  white.setValueForMode(mid, {r:1,g:1,b:1,a:1});
  map['white'] = white.id;
  return { collection:col, variableMap:map };
}

function createThemeCollection(primMap, theme) {
  removeExistingCollection('shadcn / Themes');
  var col = figma.variables.createVariableCollection('shadcn / Themes');
  var lightId = col.defaultModeId;
  col.renameMode(lightId, 'Light');
  var darkId = col.addMode('Dark');
  var map = {};
  var tokens = getSemanticTokens(theme || 'zinc');
  Object.keys(tokens).forEach(function(name) {
    var def = tokens[name];
    var v   = figma.variables.createVariable(name, col, 'COLOR');
    v.setValueForMode(lightId, primMap[def.light]
      ? {type:'VARIABLE_ALIAS', id:primMap[def.light]}
      : resolveColorKey(def.light));
    v.setValueForMode(darkId,  primMap[def.dark]
      ? {type:'VARIABLE_ALIAS', id:primMap[def.dark]}
      : resolveColorKey(def.dark));
    map[name] = v.id;
  });
  return { collection:col, variableMap:map, lightModeId:lightId, darkModeId:darkId };
}

function createSizingCollection() {
  removeExistingCollection('Tailwind / Sizing');
  var col = figma.variables.createVariableCollection('Tailwind / Sizing');
  var mid = col.defaultModeId;
  col.renameMode(mid, 'Default');

  function makeFloat(name, value) {
    var v = figma.variables.createVariable(name, col, 'FLOAT');
    v.setValueForMode(mid, value);
  }

  // Font sizes (px)
  [['xs',12],['sm',14],['base',16],['lg',18],['xl',20],['2xl',24],['3xl',30],['4xl',36],['5xl',48],['6xl',60],['7xl',72],['8xl',96],['9xl',128]].forEach(function(p) {
    makeFloat('font-size/' + p[0], p[1]);
  });

  // Border radius (px)
  [['none',0],['sm',2],['DEFAULT',4],['md',6],['lg',8],['xl',12],['2xl',16],['3xl',24],['full',9999]].forEach(function(p) {
    makeFloat('radius/' + p[0], p[1]);
  });

  // Border width (px)
  [['0',0],['DEFAULT',1],['2',2],['4',4],['8',8]].forEach(function(p) {
    makeFloat('border-width/' + p[0], p[1]);
  });

  // Opacity (0–1)
  [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100].forEach(function(n) {
    makeFloat('opacity/' + n, n / 100);
  });
}

function createComponentCollection(selectedComponents, themeMap, primMap) {
  if (!selectedComponents.length) return;
  removeExistingCollection('shadcn / Components');
  var col    = figma.variables.createVariableCollection('shadcn / Components');
  var lightId = col.defaultModeId;
  col.renameMode(lightId, 'Light');
  var darkId  = col.addMode('Dark');

  function resolveVal(val, isLight) {
    if (val.indexOf('alias:') === 0) {
      var key = val.slice(6);
      if (themeMap[key]) return {type:'VARIABLE_ALIAS', id:themeMap[key]};
      var sem = SEMANTIC_TOKENS[key];
      if (sem) {
        var pKey = isLight ? sem.light : sem.dark;
        if (primMap[pKey]) return {type:'VARIABLE_ALIAS', id:primMap[pKey]};
        return resolveColorKey(pKey);
      }
    }
    if (primMap[val]) return {type:'VARIABLE_ALIAS', id:primMap[val]};
    return resolveColorKey(val);
  }

  selectedComponents.forEach(function(key) {
    var def = COMPONENT_DEFINITIONS[key];
    if (!def) return;
    Object.keys(def.tokens).forEach(function(name) {
      var t = def.tokens[name];
      var v = figma.variables.createVariable(name, col, 'COLOR');
      v.setValueForMode(lightId, resolveVal(t.light, true));
      v.setValueForMode(darkId,  resolveVal(t.dark,  false));
    });
  });
}

// ─── Canvas helpers ───────────────────────────────────────────────────────────
// Set by buildCanvasComponents before any builder runs
var CANVAS_FONT = 'Inter';
var LOADED_STYLES = {};  // tracks which styles loaded successfully

function fontName(style) {
  // Fall back: Semi Bold → Bold → Medium → Regular
  var fallbacks = {
    'Semi Bold': ['Semi Bold', 'Bold', 'Medium', 'Regular'],
    'Bold':      ['Bold', 'Semi Bold', 'Medium', 'Regular'],
    'Medium':    ['Medium', 'Regular'],
    'Regular':   ['Regular'],
  };
  var chain = fallbacks[style] || ['Regular'];
  for (var i = 0; i < chain.length; i++) {
    if (LOADED_STYLES[CANVAS_FONT + '/' + chain[i]]) {
      return { family: CANVAS_FONT, style: chain[i] };
    }
  }
  return { family: CANVAS_FONT, style: 'Regular' };
}

// rgb() for fills/strokes — returns {r,g,b} only (no 'a'; alpha handled via paint.opacity)
function rgb(hex) {
  return {
    r: parseInt(hex.slice(1,3),16)/255,
    g: parseInt(hex.slice(3,5),16)/255,
    b: parseInt(hex.slice(5,7),16)/255
  };
}

// Build a SOLID paint, moving any alpha to paint.opacity
function solidPaint(hexOrObj) {
  var c, opacity;
  if (typeof hexOrObj === 'string') {
    c = rgb(hexOrObj); opacity = 1;
  } else {
    opacity = (hexOrObj.a !== undefined) ? hexOrObj.a : 1;
    c = { r: hexOrObj.r, g: hexOrObj.g, b: hexOrObj.b };
  }
  var p = { type:'SOLID', color:c };
  if (opacity !== 1) p.opacity = opacity;
  return p;
}

function setFill(node, hexOrObj) {
  node.fills = [solidPaint(hexOrObj)];
}

function setStroke(node, hexOrObj, weight) {
  node.strokes = [solidPaint(hexOrObj)];
  node.strokeWeight = weight || 1;
}

function addText(parent, content, opts) {
  var t = figma.createText();
  t.characters = content;
  t.fontSize   = opts.size  || 12;
  t.fills      = [solidPaint(opts.color || {r:1,g:1,b:1})];
  if (opts.weight === 'bold') t.fontName = fontName('Bold');
  else                        t.fontName = fontName('Regular');
  parent.appendChild(t);
  return t;
}

function makeFrame(name, w, h, opts) {
  var f = figma.createFrame();
  f.name   = name;
  f.resize(w, h);
  f.layoutMode = 'NONE';
  if (opts && opts.fill) setFill(f, opts.fill);
  else f.fills = [];
  if (opts && opts.radius) f.cornerRadius = opts.radius;
  return f;
}

function makeAutoFrame(name, direction, gap, padding, opts) {
  var f = figma.createFrame();
  f.name            = name;
  f.layoutMode      = direction; // 'HORIZONTAL' or 'VERTICAL'
  f.itemSpacing     = gap;
  f.paddingTop = f.paddingBottom = f.paddingLeft = f.paddingRight = padding;
  f.primaryAxisSizingMode   = 'AUTO';
  f.counterAxisSizingMode   = 'AUTO';
  if (opts && opts.fill)   setFill(f, opts.fill);
  else f.fills = [];
  if (opts && opts.radius) f.cornerRadius = opts.radius;
  if (opts && opts.stroke) { setStroke(f, opts.stroke, 1); }
  return f;
}

// Section title label
function sectionLabel(parent, text, x, y) {
  var t = figma.createText();
  t.characters = text;
  t.fontSize   = 11;
  t.fontName   = fontName('Medium');
  t.fills      = [{ type:'SOLID', color:rgb('#71717a') }];
  t.x = x; t.y = y;
  parent.appendChild(t);
  return t;
}

// ── Variable cache & paint binder ─────────────────────────────────────────────
var VAR_CACHE = null;

function buildVarCache() {
  VAR_CACHE = {};
  figma.variables.getLocalVariables('COLOR').forEach(function(v) {
    VAR_CACHE[v.name] = v;
  });
}

// Returns a SOLID paint, bound to a variable if found, else fallback hex
function vp(tokenName, fallbackHex) {
  var c = fallbackHex ? rgb(fallbackHex) : { r:0.5, g:0.5, b:0.5 };
  var base = { type:'SOLID', color:c };
  if (VAR_CACHE && tokenName && VAR_CACHE[tokenName]) {
    return figma.variables.setBoundVariableForPaint(base, 'color', VAR_CACHE[tokenName]);
  }
  return base;
}

// ── Icon cache — populated before component builders run ──────────────────────
var ICON_CACHE      = {};  // short-name → Component node
var ACTIVE_ICON_LIB = '';  // 'lucide' | 'iconnoir' | ''

// Semantic icon names → per-library icon names
var ICON_SEMANTIC = {
  'info':     { lucide:'info',            iconnoir:'info-circle'      },
  'warning':  { lucide:'alert-triangle',  iconnoir:'warning-triangle' },
  'success':  { lucide:'check-circle',    iconnoir:'check-circle'     },
  'error':    { lucide:'x-circle',        iconnoir:'xmark-circle'     },
  'plus':     { lucide:'plus',            iconnoir:'plus'             },
  'search':   { lucide:'search',          iconnoir:'search'           },
  'bell':     { lucide:'bell',            iconnoir:'bell'             },
  'close':    { lucide:'x',              iconnoir:'cancel'           },
  'check':    { lucide:'check',           iconnoir:'check'            },
  'edit':     { lucide:'edit',            iconnoir:'edit-pencil'      },
  'trash':    { lucide:'trash-2',         iconnoir:'trash'            },
  'upload':   { lucide:'upload',          iconnoir:'upload'           },
  'download': { lucide:'download',        iconnoir:'download'         },
  'user':     { lucide:'user',            iconnoir:'user'             },
  'settings': { lucide:'settings',        iconnoir:'settings'         },
  'send':     { lucide:'send',            iconnoir:'send-mail'        },
  'eye':      { lucide:'eye',             iconnoir:'eye-solid'        },
  'lock':     { lucide:'lock',            iconnoir:'lock'             },
  'star':         { lucide:'star',            iconnoir:'star'          },
  'heart':        { lucide:'heart',           iconnoir:'heart'         },
  'chevron-down': { lucide:'chevron-down',    iconnoir:'nav-arrow-down'},
  'chevron-right':{ lucide:'chevron-right',   iconnoir:'nav-arrow-right'},
};

// Create a 24×24 icon instance by semantic name; returns null if no lib loaded
function getIcon(semanticName) {
  if (!ACTIVE_ICON_LIB) return null;
  var mapping = ICON_SEMANTIC[semanticName];
  if (!mapping) return null;
  var iconName = mapping[ACTIVE_ICON_LIB];
  if (!iconName || !ICON_CACHE[iconName]) return null;
  var inst = ICON_CACHE[iconName].createInstance();
  return inst;
}

// Recolour stroke-based SVG icons — only touches VECTOR nodes, never container frames
function tintIcon(node, hexColor) {
  var paint = solidPaint(hexColor);
  function walk(n) {
    if (n.type === 'VECTOR') {
      if (n.strokes && n.strokes.length > 0) n.strokes = [paint];
      // Only tint fills when the icon path itself uses fill (e.g. filled icons)
      if (n.fills && n.fills.length > 0 && n.fills[0].type === 'SOLID' && n.fills[0].color &&
          (n.fills[0].color.r > 0 || n.fills[0].color.g > 0 || n.fills[0].color.b > 0)) {
        n.fills = [paint];
      }
    }
    if (n.children) n.children.forEach(walk);
  }
  walk(node);
}

// Icon native size — createNodeFromSvg always produces 24×24 content
var ICON_NATIVE = 24;

// Append a chevron into an auto-layout parent (no manual positioning needed).
function addChevronAL(parent, color) {
  var inst = getIcon('chevron-down');
  if (inst) {
    tintIcon(inst, color || '#71717a');
    parent.appendChild(inst);
    inst.layoutSizingHorizontal = 'FIXED';
    inst.layoutSizingVertical = 'FIXED';
  } else {
    var t = figma.createText();
    t.characters = '⌄';
    t.fontSize = 14;
    t.fontName = fontName('Regular');
    t.fills = [solidPaint(color || '#71717a')];
    parent.appendChild(t);
  }
}

// Append a chevron-down icon centered in a (slotW × slotH) area at (slotX, slotY).
// Icons are placed at native 24×24 — no resize that would break vector scaling.
function addChevron(parent, slotX, slotY, slotW, slotH, color) {
  var inst = getIcon('chevron-down');
  if (inst) {
    inst.x = slotX + Math.round((slotW - ICON_NATIVE) / 2);
    inst.y = slotY + Math.round((slotH - ICON_NATIVE) / 2);
    tintIcon(inst, color || '#71717a');
    parent.appendChild(inst);
  } else {
    var t = figma.createText();
    t.characters = '⌄';
    t.fontSize = slotW + 1;
    t.fontName = fontName('Regular');
    t.fills = [solidPaint(color || '#71717a')];
    t.x = slotX; t.y = slotY + Math.round((slotH - t.height) / 2);
    parent.appendChild(t);
  }
}

// Draw a checkmark vector path scaled to boxSize — always drawn, no icon instance.
function addCheckmark(parent, boxSize, color) {
  var sw = Math.max(1.5, boxSize / 9);
  var p  = sw;                        // inset from edge
  var mx = boxSize * 0.2 + p / 2;    // start x
  var my = boxSize * 0.52;            // start y (mid-left)
  var tx = boxSize * 0.42;            // turn x
  var ty = boxSize - p;               // turn y (bottom)
  var ex = boxSize - p;               // end x
  var ey = p;                         // end y (top-right)
  var v = figma.createVector();
  v.vectorPaths = [{ windingRule:'NONE',
    data:'M ' + mx + ' ' + my + ' L ' + tx + ' ' + ty + ' L ' + ex + ' ' + ey }];
  v.strokeWeight  = sw;
  v.strokeCap     = 'ROUND';
  v.strokeJoin    = 'ROUND';
  v.strokes       = [solidPaint(color || '#ffffff')];
  v.fills         = [];
  v.resize(boxSize, boxSize);
  parent.appendChild(v);
  v.layoutSizingHorizontal = 'FIXED';
  v.layoutSizingVertical = 'FIXED';
}

// Add a visible name label above a ComponentSet on the canvas
function addSetLabel(page, set) {
  var lbl = figma.createText();
  lbl.fontName = fontName('Semi Bold');
  lbl.fontSize = 12;
  lbl.characters = set.name;
  lbl.fills = [{ type:'SOLID', color:rgb('#71717a') }];
  lbl.x = set.x;
  lbl.y = set.y - 28;
  page.appendChild(lbl);
  return lbl;
}

// Apply wrapping auto-layout to a ComponentSet so variants don't stack
function layoutSet(set, gap) {
  gap = gap !== undefined ? gap : 20;
  set.layoutMode = 'HORIZONTAL';
  set.layoutWrap = 'WRAP';
  set.itemSpacing = gap;
  set.counterAxisSpacing = gap;
  set.paddingTop = set.paddingBottom = set.paddingLeft = set.paddingRight = gap;
  set.primaryAxisSizingMode = 'AUTO';
  set.counterAxisSizingMode = 'AUTO';
}

// ── Component builders — real Figma ComponentSets via combineAsVariants ───────

function buildButtonPage(page) {
  var variants = [
    { key:'default',     label:'Default',     bg:'#18181b', fg:'#fafafa', hBg:'#3f3f46', hFg:null,     border:null,      bgTok:'button/default/background',     fgTok:'button/default/foreground',     hBgTok:'button/default/hover-background'                                                    },
    { key:'destructive', label:'Destructive', bg:'#ef4444', fg:'#fafafa', hBg:'#dc2626', hFg:null,     border:null,      bgTok:'button/destructive/background',  fgTok:'button/destructive/foreground',  hBgTok:'button/destructive/hover-background'                                                },
    { key:'outline',     label:'Outline',     bg:'#ffffff', fg:'#18181b', hBg:'#f4f4f5', hFg:'#18181b',border:'#e4e4e7', bgTok:'button/outline/background',     fgTok:'button/outline/foreground',     hBgTok:'button/outline/hover-background',  brdTok:'button/outline/border', hFgTok:'button/outline/hover-foreground' },
    { key:'secondary',   label:'Secondary',   bg:'#f4f4f5', fg:'#18181b', hBg:'#e4e4e7', hFg:null,     border:null,      bgTok:'button/secondary/background',   fgTok:'button/secondary/foreground',   hBgTok:'button/secondary/hover-background'                                                  },
    { key:'ghost',       label:'Ghost',       bg:null,      fg:'#18181b', hBg:'#f4f4f5', hFg:null,     border:null,      bgTok:'button/ghost/background',       fgTok:'button/ghost/foreground',       hBgTok:'button/ghost/hover-background',                               hFgTok:'button/ghost/hover-foreground'    },
    { key:'link',        label:'Link',        bg:null,      fg:'#18181b', hBg:null,       hFg:'#3f3f46',border:null,      bgTok:null,                            fgTok:'button/link/foreground',        hBgTok:null,                                                           hFgTok:'button/link/hover-foreground'     },
  ];
  // Sizes: width, height and font scale relative to the active style
  var sizes = [
    { key:'sm',   label:'sm',      w:96,        h:Math.max(S.btnH - 8, 24), fz:Math.max(S.fontSize - 1, 10), px:12 },
    { key:'md',   label:'Default', w:120,       h:S.btnH,                   fz:S.fontSize,                   px:16 },
    { key:'lg',   label:'lg',      w:160,       h:S.btnH + 4,               fz:S.fontSize + 2,               px:24 },
    { key:'icon', label:'icon',    w:S.btnH,    h:S.btnH,                   fz:S.fontSize,                   px:0  },
  ];
  var states = ['Default', 'Hover', 'Disabled'];
  var allComps = [];

  variants.forEach(function(v) {
    sizes.forEach(function(sz) {
      states.forEach(function(state) {
        var comp = figma.createComponent();
        comp.name = 'Variant=' + v.label + ', Size=' + sz.label + ', State=' + state;
        comp.resize(sz.w, sz.h);
        // Clamp radius to half the height so small buttons never over-round
        comp.cornerRadius = Math.min(S.radius, Math.floor(sz.h / 2));
        comp.clipsContent = true;
        comp.layoutMode = 'HORIZONTAL';
        comp.primaryAxisSizingMode = 'FIXED';
        comp.counterAxisSizingMode = 'FIXED';
        comp.primaryAxisAlignItems = 'CENTER';
        comp.counterAxisAlignItems = 'CENTER';
        comp.paddingLeft = comp.paddingRight = sz.px;

        var bgPaint;
        if (state === 'Hover' && v.hBgTok) {
          bgPaint = vp(v.hBgTok, v.hBg || v.bg || '#f4f4f5');
        } else if (v.bgTok) {
          bgPaint = vp(v.bgTok, v.bg || '#ffffff');
        }
        comp.fills = bgPaint ? [bgPaint] : [];

        if (v.border) {
          comp.strokes = [vp(v.brdTok || '', v.border)];
          comp.strokeWeight = 1;
          comp.strokeAlign = 'INSIDE';
        }
        if (state === 'Disabled') comp.opacity = 0.4;

        if (sz.key === 'icon') {
          var iconInst = getIcon('plus');
          if (iconInst) {
            tintIcon(iconInst, v.fg || '#fafafa');
            comp.appendChild(iconInst);
            iconInst.layoutSizingHorizontal = 'FIXED';
            iconInst.layoutSizingVertical = 'FIXED';
          } else {
            var icon = figma.createFrame();
            icon.name = 'icon-placeholder';
            icon.resize(sz.fz, sz.fz);
            icon.cornerRadius = 2;
            icon.fills = [];
            icon.strokes = [solidPaint(v.fg || '#fafafa')];
            icon.strokeWeight = 1.5;
            comp.appendChild(icon);
          }
        } else {
          var t = figma.createText();
          t.characters = v.label;
          t.fontSize = sz.fz;
          t.fontName = fontName('Medium');
          var fgHex = v.fg || '#18181b';
          var fgTok;
          if (state === 'Hover' && v.hFgTok) { fgTok = v.hFgTok; fgHex = v.hFg || fgHex; }
          else { fgTok = v.fgTok; }
          t.fills = [vp(fgTok || '', fgHex)];
          comp.appendChild(t);
          t.layoutSizingHorizontal = 'HUG';
          t.layoutSizingVertical = 'HUG';
        }

        allComps.push(comp);
      });
    });
  });

  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Button';
  layoutSet(set, 16);
  set.x = 40; set.y = 40;

  // Cache button components by "variant/size/state" for the group builder
  BUTTON_COMP_CACHE = {};
  allComps.forEach(function(c) { BUTTON_COMP_CACHE[c.name] = c; });

  return set;
}

// Cache populated by buildButtonPage — used by buildButtonGroupPage
var BUTTON_COMP_CACHE   = {};
// Caches for base form components — populated before buildFormFieldPage runs
var LABEL_COMP_CACHE    = {};
var INPUT_COMP_CACHE    = {};
var TEXTAREA_COMP_CACHE = {};
var SELECT_COMP_CACHE   = {};
var SWITCH_COMP_CACHE   = {};
var CHECKBOX_COMP_CACHE = {};
var RADIO_COMP_CACHE    = {};

// Find a button component by variant label, size label, state
function getButtonComp(variantLabel, sizeLabel, state) {
  var key = 'Variant=' + variantLabel + ', Size=' + sizeLabel + ', State=' + (state || 'Default');
  return BUTTON_COMP_CACHE[key] || null;
}

function buildButtonGroupPage(page) {
  // Groups: [left, ...middle, right] — all Default size, Default state
  var groupDefs = [
    { name:'Variant=Default',   buttons:['Default','Default','Default'] },
    { name:'Variant=Outline',   buttons:['Outline','Outline','Outline'] },
    { name:'Variant=Secondary', buttons:['Secondary','Secondary','Secondary'] },
    { name:'Variant=Ghost',     buttons:['Ghost','Ghost','Ghost'] },
  ];

  // Position labels: first button gets left-only radius, last gets right-only
  var allComps = [];
  var sz = { label:'Default', h: S.btnH, fz: S.fontSize, px: 16 };
  var GAP = 0; // button groups are flush / touching

  groupDefs.forEach(function(g) {
    var btns = g.buttons;
    var groupComp = figma.createComponent();
    groupComp.name = g.name;
    groupComp.fills = [];
    groupComp.layoutMode = 'HORIZONTAL';
    groupComp.primaryAxisSizingMode = 'AUTO';
    groupComp.counterAxisSizingMode = 'AUTO';
    groupComp.primaryAxisAlignItems = 'MIN';
    groupComp.counterAxisAlignItems = 'CENTER';
    groupComp.itemSpacing = GAP;
    groupComp.paddingLeft = groupComp.paddingRight = groupComp.paddingTop = groupComp.paddingBottom = 0;

    btns.forEach(function(variantLabel, idx) {
      var src = getButtonComp(variantLabel, 'Default', 'Default');
      var w = src ? src.width : 120;
      var node;

      if (src) {
        node = src.createInstance();
        groupComp.appendChild(node);
      } else {
        var fb = figma.createFrame();
        fb.resize(w, S.btnH);
        fb.fills = [solidPaint('#18181b')];
        node = fb;
        groupComp.appendChild(node);
      }

      node.layoutSizingHorizontal = 'FIXED';
      node.layoutSizingVertical = 'FIXED';

      // Per-position border radius: segment left / middle / right
      var r = Math.min(S.radius, Math.floor(S.btnH / 2));
      if (btns.length === 1) {
        node.cornerRadius = r;
      } else if (idx === 0) {
        node.topLeftRadius    = r; node.bottomLeftRadius  = r;
        node.topRightRadius   = 0; node.bottomRightRadius = 0;
      } else if (idx === btns.length - 1) {
        node.topLeftRadius    = 0; node.bottomLeftRadius  = 0;
        node.topRightRadius   = r; node.bottomRightRadius = r;
      } else {
        node.cornerRadius = 0;
      }
    });
    allComps.push(groupComp);
  });

  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Button Group';
  layoutSet(set, 24);
  set.x = 40; set.y = 40;
  return set;
}

function buildLabelPage(page) {
  var defs = [
    { label:'Default',  text:'Label',            suffix:null,        suffixColor:null,      textTok:'label/foreground',  opacity:1   },
    { label:'Required', text:'Label',             suffix:' *',        suffixColor:'#ef4444', textTok:'label/foreground',  opacity:1   },
    { label:'Optional', text:'Label',             suffix:' Optional', suffixColor:'#a1a1aa', textTok:'label/foreground',  opacity:1   },
    { label:'Disabled', text:'Label',             suffix:null,        suffixColor:null,      textTok:'label/muted',       opacity:0.6 },
  ];
  var allComps = [];
  defs.forEach(function(d) {
    var comp = figma.createComponent();
    comp.name = 'State=' + d.label;
    comp.fills = [];
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'AUTO';
    comp.counterAxisSizingMode = 'AUTO';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.itemSpacing = 0;
    comp.paddingLeft = comp.paddingRight = comp.paddingTop = comp.paddingBottom = 0;

    var t = figma.createText();
    t.characters = d.text;
    t.fontSize = S.fontSize;
    t.fontName = fontName('Medium');
    t.fills = [vp(d.textTok, '#18181b')];
    comp.appendChild(t);
    t.layoutSizingHorizontal = 'HUG';
    t.layoutSizingVertical = 'HUG';

    if (d.suffix) {
      var s = figma.createText();
      s.characters = d.suffix;
      s.fontSize = S.fontSize;
      s.fontName = d.label === 'Required' ? fontName('Medium') : fontName('Regular');
      s.fills = [d.label === 'Required'
        ? vp('label/required', d.suffixColor)
        : vp('label/muted', d.suffixColor)];
      comp.appendChild(s);
      s.layoutSizingHorizontal = 'HUG';
      s.layoutSizingVertical = 'HUG';
    }

    if (d.opacity < 1) comp.opacity = d.opacity;
    allComps.push(comp);
  });

  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Label';
  layoutSet(set, 16);
  set.x = 40; set.y = 40;
  LABEL_COMP_CACHE = {};
  allComps.forEach(function(c) { LABEL_COMP_CACHE[c.name] = c; });
  return set;
}

function buildFormFieldPage(page) {
  var allComps = [];
  var LBL_GAP  = 6;
  var CTRL_GAP = 8;
  var helperFz = Math.max(S.fontSize - 1, 10);

  // Create a Label instance with overridden text. Falls back to a plain text node.
  function makeLabelInst(labelText, labelState) {
    var key = 'State=' + labelState; // 'Default' | 'Required' | 'Disabled'
    var src = LABEL_COMP_CACHE[key];
    if (src) {
      var inst = src.createInstance();
      // Override the first TEXT node (the label text, not the suffix)
      var tn = inst.findOne(function(n) { return n.type === 'TEXT'; });
      if (tn) tn.characters = labelText;
      return inst;
    }
    // Fallback: plain text
    var t = figma.createText();
    t.characters = labelText;
    t.fontSize = S.fontSize;
    t.fontName = fontName('Medium');
    t.fills = [vp(labelState === 'Disabled' ? 'label/muted' : 'label/foreground', '#18181b')];
    return t;
  }

  // ── Stacked layout: label on top, control instance, helper below ──────────
  function makeStacked(name, labelText, labelState, ctrlComp, helperText, isError) {
    var comp = figma.createComponent();
    comp.name = name;
    comp.fills = [];
    comp.layoutMode = 'VERTICAL';
    comp.primaryAxisSizingMode = 'AUTO';
    comp.counterAxisSizingMode = 'AUTO';
    comp.itemSpacing = LBL_GAP;
    comp.paddingLeft = comp.paddingRight = comp.paddingTop = comp.paddingBottom = 0;

    // Label row (instance or fallback text)
    var lbl = makeLabelInst(labelText, labelState);
    comp.appendChild(lbl);
    lbl.layoutSizingHorizontal = 'HUG';
    lbl.layoutSizingVertical = 'HUG';

    // Control instance
    if (ctrlComp) {
      var ctrlInst = ctrlComp.createInstance();
      comp.appendChild(ctrlInst);
      ctrlInst.layoutSizingHorizontal = 'FIXED';
      ctrlInst.layoutSizingVertical = 'FIXED';
    }

    // Helper text
    var hlp = figma.createText();
    hlp.characters = helperText;
    hlp.fontSize = helperFz;
    hlp.fontName = fontName('Regular');
    hlp.fills = [vp(isError ? 'label/required' : 'label/muted', isError ? '#ef4444' : '#a1a1aa')];
    comp.appendChild(hlp);
    hlp.layoutSizingHorizontal = 'HUG';
    hlp.layoutSizingVertical = 'HUG';

    return comp;
  }

  // ── Inline layout: control instance left, label + description right ───────
  function makeInline(name, disabled, ctrlComp, labelText, descText) {
    var comp = figma.createComponent();
    comp.name = name;
    comp.fills = [];
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'AUTO';
    comp.counterAxisSizingMode = 'AUTO';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.itemSpacing = CTRL_GAP;
    comp.paddingLeft = comp.paddingRight = comp.paddingTop = comp.paddingBottom = 0;

    if (ctrlComp) {
      var ctrlInst = ctrlComp.createInstance();
      comp.appendChild(ctrlInst);
      ctrlInst.layoutSizingHorizontal = 'FIXED';
      ctrlInst.layoutSizingVertical = 'FIXED';
    }

    var textGroup = figma.createFrame();
    textGroup.name = 'text-group';
    textGroup.fills = [];
    textGroup.layoutMode = 'VERTICAL';
    textGroup.primaryAxisSizingMode = 'AUTO';
    textGroup.counterAxisSizingMode = 'AUTO';
    textGroup.itemSpacing = 2;
    textGroup.paddingLeft = textGroup.paddingRight = textGroup.paddingTop = textGroup.paddingBottom = 0;

    var lbl = figma.createText();
    lbl.characters = labelText;
    lbl.fontSize = S.fontSize;
    lbl.fontName = fontName('Medium');
    lbl.fills = [vp(disabled ? 'label/muted' : 'label/foreground', disabled ? '#a1a1aa' : '#18181b')];
    textGroup.appendChild(lbl);
    lbl.layoutSizingHorizontal = 'HUG';
    lbl.layoutSizingVertical = 'HUG';

    var desc = figma.createText();
    desc.characters = descText;
    desc.fontSize = helperFz;
    desc.fontName = fontName('Regular');
    desc.fills = [vp('label/muted', '#a1a1aa')];
    textGroup.appendChild(desc);
    desc.layoutSizingHorizontal = 'HUG';
    desc.layoutSizingVertical = 'HUG';

    comp.appendChild(textGroup);
    textGroup.layoutSizingHorizontal = 'HUG';
    textGroup.layoutSizingVertical = 'HUG';

    if (disabled) comp.opacity = 0.6;
    return comp;
  }

  // ── INPUT ─────────────────────────────────────────────────────────────────
  [
    { state:'Default',  lblState:'Default',  ctrlKey:'State=Default',  helper:'Enter your email address.',   isError:false },
    { state:'Focus',    lblState:'Default',  ctrlKey:'State=Focus',    helper:'Enter your email address.',   isError:false },
    { state:'Filled',   lblState:'Default',  ctrlKey:'State=Filled',   helper:'Enter your email address.',   isError:false },
    { state:'Error',    lblState:'Required', ctrlKey:'State=Error',    helper:'Please enter a valid email.', isError:true  },
    { state:'Disabled', lblState:'Disabled', ctrlKey:'State=Disabled', helper:'Enter your email address.',   isError:false },
  ].forEach(function(d) {
    allComps.push(makeStacked(
      'Type=Input, State=' + d.state,
      'Email address', d.lblState,
      INPUT_COMP_CACHE[d.ctrlKey] || null,
      d.helper, d.isError
    ));
  });

  // ── TEXTAREA ──────────────────────────────────────────────────────────────
  [
    { state:'Default',  lblState:'Default',  ctrlKey:'State=Default',  helper:'Share your thoughts.' },
    { state:'Filled',   lblState:'Default',  ctrlKey:'State=Filled',   helper:'Share your thoughts.' },
    { state:'Disabled', lblState:'Disabled', ctrlKey:'State=Disabled', helper:'Share your thoughts.' },
  ].forEach(function(d) {
    allComps.push(makeStacked(
      'Type=Textarea, State=' + d.state,
      'Message', d.lblState,
      TEXTAREA_COMP_CACHE[d.ctrlKey] || null,
      d.helper, false
    ));
  });

  // ── SELECT ────────────────────────────────────────────────────────────────
  [
    { state:'Default',  lblState:'Default',  ctrlKey:'State=Closed',   helper:'Choose the best option.' },
    { state:'Open',     lblState:'Default',  ctrlKey:'State=Open',     helper:'Choose the best option.' },
    { state:'Disabled', lblState:'Disabled', ctrlKey:'State=Disabled', helper:'Choose the best option.' },
  ].forEach(function(d) {
    allComps.push(makeStacked(
      'Type=Select, State=' + d.state,
      'Category', d.lblState,
      SELECT_COMP_CACHE[d.ctrlKey] || null,
      d.helper, false
    ));
  });

  // ── SWITCH ────────────────────────────────────────────────────────────────
  [
    { state:'Off',      ctrlKey:'Checked=Off, State=Default',  dis:false },
    { state:'On',       ctrlKey:'Checked=On, State=Default',   dis:false },
    { state:'Disabled', ctrlKey:'Checked=Off, State=Disabled', dis:true  },
  ].forEach(function(d) {
    allComps.push(makeInline(
      'Type=Switch, State=' + d.state, d.dis,
      SWITCH_COMP_CACHE[d.ctrlKey] || null,
      'Allow notifications',
      'Receive email updates about your account.'
    ));
  });

  // ── CHECKBOX ──────────────────────────────────────────────────────────────
  [
    { state:'Unchecked', ctrlKey:'Checked=false, State=Default',  dis:false },
    { state:'Checked',   ctrlKey:'Checked=true, State=Default',   dis:false },
    { state:'Disabled',  ctrlKey:'Checked=false, State=Disabled', dis:true  },
  ].forEach(function(d) {
    allComps.push(makeInline(
      'Type=Checkbox, State=' + d.state, d.dis,
      CHECKBOX_COMP_CACHE[d.ctrlKey] || null,
      'Accept terms and conditions',
      'You agree to our Terms of Service and Privacy Policy.'
    ));
  });

  // ── RADIO ─────────────────────────────────────────────────────────────────
  [
    { state:'Unselected', ctrlKey:'Checked=false, State=Default',  dis:false },
    { state:'Selected',   ctrlKey:'Checked=true, State=Default',   dis:false },
    { state:'Disabled',   ctrlKey:'Checked=false, State=Disabled', dis:true  },
  ].forEach(function(d) {
    allComps.push(makeInline(
      'Type=Radio, State=' + d.state, d.dis,
      RADIO_COMP_CACHE[d.ctrlKey] || null,
      'Default option',
      'This is the recommended setting.'
    ));
  });


  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Form Field';
  layoutSet(set, 24);
  set.x = 40; set.y = 40;
  return set;
}

function buildInputPage(page) {
  var defs = [
    { label:'Default',  bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'Placeholder text',   phColor:'#a1a1aa', bgTok:'input/background', brdTok:'input/border',    phTok:'input/placeholder' },
    { label:'Focus',    bg:'#ffffff', border:'#18181b', sw:2, ph:'Focused input',       phColor:'#a1a1aa', bgTok:'input/background', brdTok:'input/ring',      phTok:'input/placeholder' },
    { label:'Filled',   bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'user@example.com',   phColor:'#18181b', bgTok:'input/background', brdTok:'input/border',    phTok:'input/text'        },
    { label:'Error',    bg:'#ffffff', border:'#ef4444', sw:1, ph:'invalid@',            phColor:'#18181b', bgTok:'input/background', brdTok:'',                phTok:'input/text'        },
    { label:'Disabled', bg:'#f4f4f5', border:'#e4e4e7', sw:1, ph:'Disabled input',     phColor:'#a1a1aa', bgTok:'input/disabled-background', brdTok:'input/border', phTok:'input/disabled-text', opacity:0.6 },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = 'State=' + s.label;
    comp.resize(S.inputW, S.inputH);
    comp.cornerRadius = S.radius;
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = comp.paddingRight = 12;
    comp.fills = [vp(s.bgTok, s.bg)];
    comp.strokes = s.label === 'Error' ? [solidPaint('#ef4444')] : [vp(s.brdTok, s.border)];
    comp.strokeWeight = s.sw;
    comp.strokeAlign = 'INSIDE';
    if (s.opacity) comp.opacity = s.opacity;
    var ph = figma.createText();
    ph.characters = s.ph;
    ph.fontSize = S.fontSize;
    ph.fontName = fontName('Regular');
    ph.fills = [vp(s.phTok, s.phColor)];
    comp.appendChild(ph);
    ph.layoutSizingHorizontal = 'FILL';
    ph.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Input';
  layoutSet(set);
  set.x = 40; set.y = 40;
  INPUT_COMP_CACHE = {};
  allComps.forEach(function(c) { INPUT_COMP_CACHE[c.name] = c; });
  return set;
}

function buildTextareaPage(page) {
  var defs = [
    { label:'Default',  bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'Write your message here...' },
    { label:'Focus',    bg:'#ffffff', border:'#18181b', sw:2, ph:'Write your message here...' },
    { label:'Filled',   bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'Hello, World!'              },
    { label:'Disabled', bg:'#f4f4f5', border:'#e4e4e7', sw:1, ph:'Disabled textarea', opacity:0.6 },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = 'State=' + s.label;
    comp.resize(S.inputW, S.textareH);
    comp.cornerRadius = S.radius;
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'MIN';
    comp.paddingLeft = comp.paddingRight = comp.paddingTop = comp.paddingBottom = 12;
    comp.fills = [vp('textarea/background', s.bg)];
    comp.strokes = [solidPaint(s.border)];
    comp.strokeWeight = s.sw;
    comp.strokeAlign = 'INSIDE';
    if (s.opacity) comp.opacity = s.opacity;
    var ph = figma.createText();
    ph.characters = s.ph;
    ph.fontSize = S.fontSize;
    ph.fontName = fontName('Regular');
    ph.fills = [vp(s.label === 'Filled' ? 'textarea/text' : 'textarea/placeholder', s.label === 'Filled' ? '#18181b' : '#a1a1aa')];
    comp.appendChild(ph);
    ph.layoutSizingHorizontal = 'FILL';
    ph.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Textarea';
  layoutSet(set);
  set.x = 40; set.y = 40;
  TEXTAREA_COMP_CACHE = {};
  allComps.forEach(function(c) { TEXTAREA_COMP_CACHE[c.name] = c; });
  return set;
}

function buildSelectPage(page) {
  var defs = [
    { label:'Closed',   text:'Select an option', textColor:'#a1a1aa', textTok:'select/placeholder', border:'#e4e4e7', sw:1 },
    { label:'Open',     text:'Option 2',          textColor:'#18181b', textTok:'select/text',        border:'#18181b', sw:2 },
    { label:'Disabled', text:'Select an option',  textColor:'#a1a1aa', textTok:'select/placeholder', border:'#e4e4e7', sw:1, opacity:0.6 },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = 'State=' + s.label;
    comp.resize(S.inputW, S.inputH);
    comp.cornerRadius = S.radius;
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = 12;
    comp.paddingRight = 8;
    comp.itemSpacing = 4;
    comp.fills = [vp('select/background', '#ffffff')];
    comp.strokes = [vp('select/border', s.border)];
    comp.strokeWeight = s.sw;
    comp.strokeAlign = 'INSIDE';
    if (s.opacity) comp.opacity = s.opacity;
    var t = figma.createText();
    t.characters = s.text;
    t.fontSize = S.fontSize;
    t.fontName = fontName('Regular');
    t.fills = [vp(s.textTok, s.textColor)];
    comp.appendChild(t);
    t.layoutSizingHorizontal = 'FILL';
    t.layoutSizingVertical = 'HUG';
    addChevronAL(comp);
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Select';
  layoutSet(set);
  set.x = 40; set.y = 40;
  SELECT_COMP_CACHE = {};
  allComps.forEach(function(c) { SELECT_COMP_CACHE[c.name] = c; });
  return set;
}

function buildSwitchPage(page) {
  var defs = [
    { label:'Checked=Off, State=Default',  checked:false, disabled:false },
    { label:'Checked=On, State=Default',   checked:true,  disabled:false },
    { label:'Checked=Off, State=Disabled', checked:false, disabled:true  },
    { label:'Checked=On, State=Disabled',  checked:true,  disabled:true  },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = s.label;
    comp.resize(S.switchW, S.switchH);
    comp.cornerRadius = S.switchH / 2;
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = s.checked ? 'MAX' : 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = comp.paddingRight = comp.paddingTop = comp.paddingBottom = 3;
    comp.fills = [vp(s.checked ? 'switch/track-checked' : 'switch/track-unchecked', s.checked ? '#18181b' : '#e4e4e7')];
    if (s.disabled) comp.opacity = 0.4;
    var tSz = S.switchH - 6;
    var thumb = figma.createFrame();
    thumb.name = 'thumb';
    thumb.resize(tSz, tSz);
    thumb.cornerRadius = tSz / 2;
    thumb.fills = [vp('switch/thumb', '#ffffff')];
    comp.appendChild(thumb);
    thumb.layoutSizingHorizontal = 'FIXED';
    thumb.layoutSizingVertical = 'FIXED';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Switch';
  layoutSet(set);
  set.x = 40; set.y = 40;
  SWITCH_COMP_CACHE = {};
  allComps.forEach(function(c) { SWITCH_COMP_CACHE[c.name] = c; });
  return set;
}

function buildCheckboxPage(page) {
  var defs = [
    { label:'Checked=false, State=Default',           checked:false,  disabled:false },
    { label:'Checked=true, State=Default',            checked:true,   disabled:false },
    { label:'Checked=indeterminate, State=Default',   checked:'ind',  disabled:false },
    { label:'Checked=false, State=Disabled',          checked:false,  disabled:true  },
    { label:'Checked=true, State=Disabled',           checked:true,   disabled:true  },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = s.label;
    comp.resize(16, 16);
    comp.cornerRadius = Math.min(S.radius, 4);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'CENTER';
    comp.counterAxisAlignItems = 'CENTER';
    comp.fills = s.checked === true
      ? [vp('checkbox/background-checked', '#18181b')]
      : [vp('checkbox/background-default', '#ffffff')];
    comp.strokes = [solidPaint(s.checked ? '#18181b' : '#e4e4e7')];
    comp.strokeWeight = 1.5;
    comp.strokeAlign = 'INSIDE';
    if (s.disabled) comp.opacity = 0.4;
    if (s.checked === true) {
      addCheckmark(comp, 16, '#ffffff');
    } else if (s.checked === 'ind') {
      var dash = figma.createFrame();
      dash.name = 'dash';
      dash.resize(10, 2);
      dash.cornerRadius = 1;
      dash.fills = [solidPaint('#18181b')];
      comp.appendChild(dash);
      dash.layoutSizingHorizontal = 'FIXED';
      dash.layoutSizingVertical = 'FIXED';
    }
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Checkbox';
  layoutSet(set);
  set.x = 40; set.y = 40;
  CHECKBOX_COMP_CACHE = {};
  allComps.forEach(function(c) { CHECKBOX_COMP_CACHE[c.name] = c; });
  return set;
}

function buildRadioPage(page) {
  var defs = [
    { label:'Checked=false, State=Default',  checked:false, disabled:false },
    { label:'Checked=true, State=Default',   checked:true,  disabled:false },
    { label:'Checked=false, State=Disabled', checked:false, disabled:true  },
    { label:'Checked=true, State=Disabled',  checked:true,  disabled:true  },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = s.label;
    comp.resize(18, 18);
    comp.cornerRadius = 9;
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'CENTER';
    comp.counterAxisAlignItems = 'CENTER';
    comp.fills = [vp('radio/background', '#ffffff')];
    comp.strokes = [vp(s.checked ? 'radio/border' : '', s.checked ? '#18181b' : '#e4e4e7')];
    comp.strokeWeight = 1.5;
    comp.strokeAlign = 'INSIDE';
    if (s.disabled) comp.opacity = 0.4;
    if (s.checked) {
      var dot = figma.createFrame();
      dot.name = 'dot';
      dot.resize(8, 8);
      dot.cornerRadius = 4;
      dot.fills = [vp('radio/indicator', '#18181b')];
      comp.appendChild(dot);
      dot.layoutSizingHorizontal = 'FIXED';
      dot.layoutSizingVertical = 'FIXED';
    }
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Radio';
  layoutSet(set);
  set.x = 40; set.y = 40;
  RADIO_COMP_CACHE = {};
  allComps.forEach(function(c) { RADIO_COMP_CACHE[c.name] = c; });
  return set;
}

function buildSliderPage(page) {
  var defs = [
    { label:'State=Default',  value:60, disabled:false },
    { label:'State=Focus',    value:60, disabled:false },
    { label:'State=Disabled', value:60, disabled:true  },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = s.label;
    comp.resize(240, 20);
    comp.clipsContent = false;
    comp.fills = [];
    if (s.disabled) comp.opacity = 0.4;
    var track = figma.createFrame();
    track.name = 'track';
    track.resize(240, 6);
    track.cornerRadius = 3;
    track.fills = [vp('slider/track-background', '#e4e4e7')];
    track.x = 0; track.y = 7;
    comp.appendChild(track);
    var range = figma.createFrame();
    range.name = 'range';
    range.resize(Math.round(240 * s.value / 100), 6);
    range.cornerRadius = 3;
    range.fills = [vp('slider/range', '#18181b')];
    range.x = 0; range.y = 7;
    comp.appendChild(range);
    var thumb = figma.createFrame();
    thumb.name = 'thumb';
    thumb.resize(20, 20);
    thumb.cornerRadius = 10;
    thumb.fills = [vp('slider/thumb', '#ffffff')];
    thumb.strokes = [vp('slider/thumb-border', '#18181b')];
    thumb.strokeWeight = 2;
    thumb.strokeAlign = 'INSIDE';
    thumb.x = Math.round(240 * s.value / 100) - 10;
    thumb.y = 0;
    comp.appendChild(thumb);
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Slider';
  layoutSet(set);
  set.x = 40; set.y = 40;
  return set;
}

function buildBadgePage(page) {
  var variants = [
    { label:'Default',     bg:'#18181b', fg:'#fafafa', border:null,      bgTok:'badge/default/background',     fgTok:'badge/default/foreground'     },
    { label:'Secondary',   bg:'#f4f4f5', fg:'#18181b', border:null,      bgTok:'badge/secondary/background',   fgTok:'badge/secondary/foreground'   },
    { label:'Destructive', bg:'#ef4444', fg:'#fafafa', border:null,      bgTok:'badge/destructive/background', fgTok:'badge/destructive/foreground' },
    { label:'Outline',     bg:'#ffffff', fg:'#18181b', border:'#e4e4e7', bgTok:null,                           fgTok:'badge/outline/foreground',    brdTok:'badge/outline/border' },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = 'Variant=' + v.label;
    comp.resize(40, S.badgeH);
    // 999 = full pill; clamp to half height so Figma doesn't error
    comp.cornerRadius = Math.min(S.badgeR, Math.floor(S.badgeH / 2));
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'AUTO';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'CENTER';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = comp.paddingRight = 8;
    comp.fills = v.bgTok ? [vp(v.bgTok, v.bg)] : [solidPaint(v.bg)];
    if (v.border) {
      comp.strokes = [vp(v.brdTok || '', v.border)];
      comp.strokeWeight = 1;
      comp.strokeAlign = 'INSIDE';
    }
    var t = figma.createText();
    t.characters = v.label;
    t.fontSize = Math.max(S.fontSize - 2, 10);
    t.fontName = fontName('Medium');
    t.fills = [vp(v.fgTok, v.fg)];
    comp.appendChild(t);
    t.layoutSizingHorizontal = 'HUG';
    t.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Badge';
  layoutSet(set);
  set.x = 40; set.y = 40;
  return set;
}

function buildCardPage(page) {
  var variants = [
    { label:'Variant=Light', bg:'#ffffff', title:'#18181b', desc:'#71717a', border:'#e4e4e7', btnBg:'#18181b', btnFg:{r:1,g:1,b:1},     bgTok:'card/background', fgTok:'card/foreground', brdTok:'card/border' },
    { label:'Variant=Dark',  bg:'#18181b', title:'#ffffff', desc:'#71717a', border:'#27272a', btnBg:'#f4f4f5', btnFg:{r:0.1,g:0.1,b:0.1}, bgTok:'card/background', fgTok:'card/foreground', brdTok:'card/border' },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = v.label;
    comp.resize(320, 200);
    comp.cornerRadius = S.cardR;
    comp.clipsContent = true;
    comp.layoutMode = 'VERTICAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'MIN';
    comp.paddingLeft = comp.paddingRight = 0;
    comp.paddingTop = comp.paddingBottom = 0;
    comp.itemSpacing = 0;
    comp.fills = [vp(v.bgTok, v.bg)];
    comp.strokes = [vp(v.brdTok, v.border)];
    comp.strokeWeight = 1;
    comp.strokeAlign = 'INSIDE';
    comp.effects = [{ type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.06}, offset:{x:0,y:2}, radius:8, spread:0, visible:true, blendMode:'NORMAL' }];

    // Header area
    var header = figma.createFrame();
    header.name = 'header';
    header.fills = [];
    header.layoutMode = 'VERTICAL';
    header.primaryAxisSizingMode = 'AUTO';
    header.counterAxisSizingMode = 'AUTO';
    header.itemSpacing = 6;
    header.paddingLeft = header.paddingRight = 20;
    header.paddingTop = header.paddingBottom = 20;

    var ct = figma.createText();
    ct.characters = 'Card Title';
    ct.fontSize = 16;
    ct.fontName = fontName('Semi Bold');
    ct.fills = [vp(v.fgTok, v.title)];
    header.appendChild(ct);
    ct.layoutSizingHorizontal = 'HUG';
    ct.layoutSizingVertical = 'HUG';
    var cd = figma.createText();
    cd.characters = 'Card description goes here.';
    cd.fontSize = 13;
    cd.fontName = fontName('Regular');
    cd.fills = [solidPaint(v.desc)];
    header.appendChild(cd);
    cd.layoutSizingHorizontal = 'HUG';
    cd.layoutSizingVertical = 'HUG';
    comp.appendChild(header);
    header.layoutSizingHorizontal = 'FILL';
    header.layoutSizingVertical = 'HUG';

    var divLine = figma.createFrame();
    divLine.name = 'divider';
    divLine.resize(1, 1);
    divLine.fills = [solidPaint(v.border)];
    comp.appendChild(divLine);
    divLine.layoutSizingHorizontal = 'FILL';
    divLine.layoutSizingVertical = 'FIXED';

    // Footer area
    var footer = figma.createFrame();
    footer.name = 'footer';
    footer.fills = [];
    footer.layoutMode = 'HORIZONTAL';
    footer.primaryAxisSizingMode = 'AUTO';
    footer.counterAxisSizingMode = 'AUTO';
    footer.paddingLeft = footer.paddingRight = 20;
    footer.paddingTop = footer.paddingBottom = 16;

    var btn = figma.createFrame();
    btn.name = 'action-btn';
    btn.resize(84, 32);
    btn.cornerRadius = 6;
    btn.layoutMode = 'HORIZONTAL';
    btn.primaryAxisSizingMode = 'FIXED';
    btn.counterAxisSizingMode = 'FIXED';
    btn.primaryAxisAlignItems = 'CENTER';
    btn.counterAxisAlignItems = 'CENTER';
    btn.fills = [solidPaint(v.btnBg)];
    comp.appendChild(footer);
    footer.layoutSizingHorizontal = 'FILL';
    footer.layoutSizingVertical = 'HUG';
    footer.appendChild(btn);
    var ft = figma.createText();
    ft.characters = 'Action';
    ft.fontSize = 12;
    ft.fontName = fontName('Medium');
    ft.fills = [{ type:'SOLID', color:v.btnFg }];
    btn.appendChild(ft);
    ft.layoutSizingHorizontal = 'HUG';
    ft.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Card';
  layoutSet(set);
  set.x = 40; set.y = 40;
  return set;
}

function buildAlertPage(page) {
  var variants = [
    { label:'Variant=Default',     bg:'#ffffff', border:'#e4e4e7', titleColor:'#18181b', descColor:'#71717a', title:'Heads up!', desc:'You can add components using the CLI.', bgTok:'alert/default/background',     brdTok:'alert/default/border',     ttlTok:'alert/default/foreground',     dscTok:'alert/default/foreground',     icon:'info'    },
    { label:'Variant=Destructive', bg:'#ffffff', border:'#ef4444', titleColor:'#ef4444', descColor:'#b91c1c', title:'Error',     desc:'Your session has expired. Please log in.', bgTok:'alert/destructive/background', brdTok:'alert/destructive/border', ttlTok:'alert/destructive/foreground', dscTok:'alert/destructive/foreground', icon:'error'   },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = v.label;
    comp.resize(480, 72);
    comp.cornerRadius = S.alertR;
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = comp.paddingRight = 16;
    comp.paddingTop = comp.paddingBottom = 12;
    comp.itemSpacing = 12;
    comp.fills = [vp(v.bgTok, v.bg)];
    comp.strokes = [vp(v.brdTok, v.border)];
    comp.strokeWeight = 1;
    comp.strokeAlign = 'INSIDE';

    var iconInst = getIcon(v.icon);
    if (iconInst) {
      tintIcon(iconInst, v.titleColor);
      comp.appendChild(iconInst);
      iconInst.layoutSizingHorizontal = 'FIXED';
      iconInst.layoutSizingVertical = 'FIXED';
    }

    var textGroup = figma.createFrame();
    textGroup.name = 'text';
    textGroup.fills = [];
    textGroup.layoutMode = 'VERTICAL';
    textGroup.primaryAxisSizingMode = 'AUTO';
    textGroup.counterAxisSizingMode = 'AUTO';
    textGroup.itemSpacing = 4;
    textGroup.paddingLeft = textGroup.paddingRight = textGroup.paddingTop = textGroup.paddingBottom = 0;

    var aTitle = figma.createText();
    aTitle.characters = v.title;
    aTitle.fontSize = S.fontSize + 1;
    aTitle.fontName = fontName('Semi Bold');
    aTitle.fills = [vp(v.ttlTok, v.titleColor)];
    textGroup.appendChild(aTitle);
    aTitle.layoutSizingHorizontal = 'HUG';
    aTitle.layoutSizingVertical = 'HUG';
    var aDesc = figma.createText();
    aDesc.characters = v.desc;
    aDesc.fontSize = 13;
    aDesc.fontName = fontName('Regular');
    aDesc.fills = [vp(v.dscTok, v.descColor)];
    textGroup.appendChild(aDesc);
    aDesc.layoutSizingHorizontal = 'HUG';
    aDesc.layoutSizingVertical = 'HUG';
    comp.appendChild(textGroup);
    textGroup.layoutSizingHorizontal = 'FILL';
    textGroup.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Alert';
  layoutSet(set);
  set.x = 40; set.y = 40;
  return set;
}

function buildToastPage(page) {
  var variants = [
    { label:'Variant=Default',     bg:'#ffffff', border:'#e4e4e7', title:'Scheduled: Catch up',         desc:'Friday, Feb 10, 2023 at 5:57 PM',     bgTok:'toast/background',             brdTok:'toast/border', iconSemantic:'success', iconColor:'#18181b' },
    { label:'Variant=Destructive', bg:'#ffffff', border:'#ef4444', title:'Error: Something went wrong',  desc:'Please try again or contact support.', bgTok:'toast/destructive/background', brdTok:'toast/border', iconSemantic:'error',   iconColor:'#ef4444' },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = v.label;
    comp.resize(340, 64);
    comp.cornerRadius = S.alertR;
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = comp.paddingRight = 12;
    comp.paddingTop = comp.paddingBottom = 0;
    comp.itemSpacing = 8;
    comp.fills = [vp(v.bgTok, v.bg)];
    comp.strokes = [vp(v.brdTok, v.border)];
    comp.strokeWeight = 1;
    comp.strokeAlign = 'INSIDE';
    comp.effects = [{ type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.12}, offset:{x:0,y:4}, radius:16, spread:0, visible:true, blendMode:'NORMAL' }];

    var iconInst = getIcon(v.iconSemantic);
    if (iconInst) {
      tintIcon(iconInst, v.iconColor);
      comp.appendChild(iconInst);
      iconInst.layoutSizingHorizontal = 'FIXED';
      iconInst.layoutSizingVertical = 'FIXED';
    }

    var textGroup = figma.createFrame();
    textGroup.name = 'text';
    textGroup.fills = [];
    textGroup.layoutMode = 'VERTICAL';
    textGroup.primaryAxisSizingMode = 'AUTO';
    textGroup.counterAxisSizingMode = 'AUTO';
    textGroup.itemSpacing = 2;
    textGroup.paddingLeft = textGroup.paddingRight = textGroup.paddingTop = textGroup.paddingBottom = 0;

    var ttitle = figma.createText();
    ttitle.characters = v.title;
    ttitle.fontSize = 13;
    ttitle.fontName = fontName('Semi Bold');
    ttitle.fills = [vp('toast/foreground', '#18181b')];
    textGroup.appendChild(ttitle);
    ttitle.layoutSizingHorizontal = 'HUG';
    ttitle.layoutSizingVertical = 'HUG';
    var tdesc = figma.createText();
    tdesc.characters = v.desc;
    tdesc.fontSize = 12;
    tdesc.fontName = fontName('Regular');
    tdesc.fills = [solidPaint('#71717a')];
    textGroup.appendChild(tdesc);
    tdesc.layoutSizingHorizontal = 'HUG';
    tdesc.layoutSizingVertical = 'HUG';
    comp.appendChild(textGroup);
    textGroup.layoutSizingHorizontal = 'FILL';
    textGroup.layoutSizingVertical = 'HUG';

    var btn = figma.createFrame();
    btn.name = 'action-btn';
    btn.resize(48, 28);
    btn.cornerRadius = 5;
    btn.layoutMode = 'HORIZONTAL';
    btn.primaryAxisSizingMode = 'FIXED';
    btn.counterAxisSizingMode = 'FIXED';
    btn.primaryAxisAlignItems = 'CENTER';
    btn.counterAxisAlignItems = 'CENTER';
    btn.fills = [vp('toast/action-background', '#f4f4f5')];
    comp.appendChild(btn);
    btn.layoutSizingHorizontal = 'FIXED';
    btn.layoutSizingVertical = 'FIXED';
    var tu = figma.createText();
    tu.characters = 'Undo';
    tu.fontSize = 12;
    tu.fontName = fontName('Medium');
    tu.fills = [vp('toast/action-foreground', '#18181b')];
    btn.appendChild(tu);
    tu.layoutSizingHorizontal = 'HUG';
    tu.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Toast';
  layoutSet(set);
  set.x = 40; set.y = 40;
  return set;
}

function buildDialogPage(page) {
  var comp = figma.createComponent();
  comp.name = 'Variant=Default';
  comp.resize(480, 260);
  comp.cornerRadius = S.cardR;
  comp.clipsContent = true;
  comp.layoutMode = 'VERTICAL';
  comp.primaryAxisSizingMode = 'FIXED';
  comp.counterAxisSizingMode = 'FIXED';
  comp.primaryAxisAlignItems = 'MIN';
  comp.counterAxisAlignItems = 'MIN';
  comp.paddingLeft = comp.paddingRight = comp.paddingTop = comp.paddingBottom = 24;
  comp.itemSpacing = 16;
  comp.fills = [vp('dialog/background', '#ffffff')];
  comp.strokes = [vp('dialog/border', '#e4e4e7')];
  comp.strokeWeight = 1;
  comp.strokeAlign = 'INSIDE';
  comp.effects = [{ type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.2}, offset:{x:0,y:8}, radius:40, spread:0, visible:true, blendMode:'NORMAL' }];

  var dtitle = figma.createText();
  dtitle.characters = 'Edit Profile';
  dtitle.fontSize = 18;
  dtitle.fontName = fontName('Semi Bold');
  dtitle.fills = [vp('dialog/foreground', '#18181b')];
  comp.appendChild(dtitle);
  dtitle.layoutSizingHorizontal = 'HUG';
  dtitle.layoutSizingVertical = 'HUG';

  var ddesc = figma.createText();
  ddesc.characters = 'Make changes to your profile here.';
  ddesc.fontSize = 13;
  ddesc.fontName = fontName('Regular');
  ddesc.fills = [solidPaint('#71717a')];
  comp.appendChild(ddesc);
  ddesc.layoutSizingHorizontal = 'HUG';
  ddesc.layoutSizingVertical = 'HUG';

  var inp = figma.createFrame();
  inp.name = 'field';
  inp.resize(432, S.inputH);
  inp.cornerRadius = S.radius;
  inp.layoutMode = 'HORIZONTAL';
  inp.primaryAxisSizingMode = 'FIXED';
  inp.counterAxisSizingMode = 'FIXED';
  inp.primaryAxisAlignItems = 'MIN';
  inp.counterAxisAlignItems = 'CENTER';
  inp.paddingLeft = inp.paddingRight = 12;
  inp.fills = [solidPaint('#ffffff')];
  inp.strokes = [solidPaint('#e4e4e7')];
  inp.strokeWeight = 1;
  inp.strokeAlign = 'INSIDE';
  comp.appendChild(inp);
  inp.layoutSizingHorizontal = 'FILL';
  inp.layoutSizingVertical = 'FIXED';

  var iph = figma.createText();
  iph.characters = 'Pedro Duarte';
  iph.fontSize = 13;
  iph.fontName = fontName('Regular');
  iph.fills = [solidPaint('#18181b')];
  inp.appendChild(iph);
  iph.layoutSizingHorizontal = 'FILL';
  iph.layoutSizingVertical = 'HUG';

  // Actions row
  var actions = figma.createFrame();
  actions.name = 'actions';
  actions.fills = [];
  actions.layoutMode = 'HORIZONTAL';
  actions.primaryAxisSizingMode = 'AUTO';
  actions.counterAxisSizingMode = 'AUTO';
  actions.primaryAxisAlignItems = 'MAX';
  actions.counterAxisAlignItems = 'CENTER';
  actions.itemSpacing = 8;
  actions.paddingLeft = actions.paddingRight = actions.paddingTop = actions.paddingBottom = 0;
  comp.appendChild(actions);
  actions.layoutSizingHorizontal = 'FILL';
  actions.layoutSizingVertical = 'HUG';

  var cancel = figma.createFrame();
  cancel.name = 'cancel-btn';
  cancel.resize(90, S.btnH);
  cancel.cornerRadius = S.radius;
  cancel.layoutMode = 'HORIZONTAL';
  cancel.primaryAxisSizingMode = 'FIXED';
  cancel.counterAxisSizingMode = 'FIXED';
  cancel.primaryAxisAlignItems = 'CENTER';
  cancel.counterAxisAlignItems = 'CENTER';
  cancel.fills = [solidPaint('#f4f4f5')];
  actions.appendChild(cancel);

  var ct2 = figma.createText();
  ct2.characters = 'Cancel';
  ct2.fontSize = 13;
  ct2.fontName = fontName('Medium');
  ct2.fills = [solidPaint('#18181b')];
  cancel.appendChild(ct2);
  ct2.layoutSizingHorizontal = 'HUG';
  ct2.layoutSizingVertical = 'HUG';

  var save = figma.createFrame();
  save.name = 'save-btn';
  save.resize(90, S.btnH);
  save.cornerRadius = S.radius;
  save.layoutMode = 'HORIZONTAL';
  save.primaryAxisSizingMode = 'FIXED';
  save.counterAxisSizingMode = 'FIXED';
  save.primaryAxisAlignItems = 'CENTER';
  save.counterAxisAlignItems = 'CENTER';
  save.fills = [vp('button/default/background', '#18181b')];
  actions.appendChild(save);

  var st2 = figma.createText();
  st2.characters = 'Save';
  st2.fontSize = 13;
  st2.fontName = fontName('Medium');
  st2.fills = [{ type:'SOLID', color:{r:1,g:1,b:1} }];
  save.appendChild(st2);
  st2.layoutSizingHorizontal = 'HUG';
  st2.layoutSizingVertical = 'HUG';

  var set = figma.combineAsVariants([comp], page);
  set.name = 'Dialog';
  layoutSet(set);
  set.x = 40; set.y = 40;
  return set;
}

// ─── Cover page ───────────────────────────────────────────────────────────────
function buildCoverPage(page) {
  var frame = makeFrame('Cover', 1200, 800, { fill:'#09090b' });
  page.appendChild(frame);

  // Title
  var title = figma.createText();
  title.characters = 'Tailwind 4 + shadcn/ui';
  title.fontSize   = 48;
  title.fontName   = fontName('Bold');
  title.fills      = [{ type:'SOLID', color:{r:1,g:1,b:1} }];
  title.x = 80; title.y = 100;
  frame.appendChild(title);

  var sub = figma.createText();
  sub.characters = 'Design System · Variables · Components';
  sub.fontSize   = 18;
  sub.fontName   = fontName('Regular');
  sub.fills      = [{ type:'SOLID', color:rgb('#71717a') }];
  sub.x = 80; sub.y = 164;
  frame.appendChild(sub);

  // Color palette swatches
  var paletteY = 260;
  var swatchNames = ['slate','gray','zinc','red','orange','amber','yellow','lime','green','emerald','teal','cyan','sky','blue','indigo','violet','purple','fuchsia','pink','rose'];
  var shades = [50,100,200,300,400,500,600,700,800,900,950];
  var swW = 32; var swH = 32; var swGap = 2;

  swatchNames.forEach(function(name, ni) {
    shades.forEach(function(shade, si) {
      var hex = TW_COLORS[name] && TW_COLORS[name][shade];
      if (!hex) return;
      var sw = makeFrame(name+'/'+shade, swW, swH, { fill:hex });
      sw.x = 80 + si * (swW + swGap);
      sw.y = paletteY + ni * (swH + swGap);
      frame.appendChild(sw);
    });
    var lbl = figma.createText();
    lbl.characters = name;
    lbl.fontSize   = 10;
    lbl.fontName   = fontName('Regular');
    lbl.fills      = [{ type:'SOLID', color:rgb('#52525b') }];
    lbl.x = 80 + 11*(swW+swGap) + 8;
    lbl.y = paletteY + ni*(swH+swGap) + 10;
    frame.appendChild(lbl);
  });

}

// ─── Page management ──────────────────────────────────────────────────────────

function getOrCreatePage(name) {
  for (var i = 0; i < figma.root.children.length; i++) {
    if (figma.root.children[i].name === name) return figma.root.children[i];
  }
  var p = figma.createPage();
  p.name = name;
  return p;
}

function clearPage(page) {
  while (page.children.length > 0) {
    page.children[0].remove();
  }
}

function buildCanvasComponents(selectedComponents, options, fontFamily) {
  CANVAS_FONT = fontFamily || 'Inter';
  S = STYLE_PRESETS[options.style] || STYLE_PRESETS.vega;
  buildVarCache(); // populate VAR_CACHE so vp() can bind variables

  // ── Icon library: build page first so ICON_CACHE is ready for all builders ─
  ICON_CACHE      = {};
  ACTIVE_ICON_LIB = options.iconLibrary || '';
  if (ACTIVE_ICON_LIB === 'lucide' || ACTIVE_ICON_LIB === 'iconnoir') {
    var iconsData    = ACTIVE_ICON_LIB === 'lucide' ? LUCIDE_ICONS : ICONNOIR_ICONS;
    var libLabel     = ACTIVE_ICON_LIB === 'lucide' ? 'Lucide' : 'Iconnoir';
    var iconPageName = 'Icons \u2014 ' + libLabel;
    var iconPg       = getOrCreatePage(iconPageName);
    clearPage(iconPg);
    figma.currentPage = iconPg;
    buildIconPage(iconPg, libLabel, iconsData); // also populates ICON_CACHE
  }

  // formfield depends on caches populated by label/input/textarea/select/switch/checkbox/radio
  // Ensure those dependencies are built first, adding them silently if not already selected
  if (selectedComponents.indexOf('formfield') !== -1) {
    var ffDeps = ['label','input','textarea','select','checkbox','radio','switch'];
    ffDeps.forEach(function(dep) {
      if (selectedComponents.indexOf(dep) === -1) {
        selectedComponents = [dep].concat(selectedComponents);
      }
    });
    // Move formfield to the very end
    selectedComponents = selectedComponents.filter(function(k) { return k !== 'formfield'; });
    selectedComponents.push('formfield');
  }

  var pageMode  = options.pageMode;  // 'per-component' | 'grouped' | 'single'
  var coverPage = options.coverPage;

  // Each key maps to its own builder — no shared builders anymore
  var builders = {
    button:      buildButtonPage,
    buttongroup: buildButtonGroupPage,
    formfield:   buildFormFieldPage,
    label:     buildLabelPage,
    input:     buildInputPage,
    textarea: buildTextareaPage,
    select:   buildSelectPage,
    switch:   buildSwitchPage,
    checkbox: buildCheckboxPage,
    radio:    buildRadioPage,
    slider:   buildSliderPage,
    badge:    buildBadgePage,
    card:     buildCardPage,
    alert:    buildAlertPage,
    toast:    buildToastPage,
    dialog:   buildDialogPage,
  };

  // Track which pages have been created to avoid duplicates
  var pagesBuilt = {};

  if (coverPage) {
    var cp = getOrCreatePage('Cover');
    clearPage(cp);
    buildCoverPage(cp);
    pagesBuilt['Cover'] = true;
  }

  if (pageMode === 'single') {
    var singlePage = getOrCreatePage('Components');
    clearPage(singlePage);
    figma.currentPage = singlePage;
    var offsetX = 40;
    selectedComponents.forEach(function(key) {
      if (!builders[key]) return;
      var set = builders[key](singlePage);
      if (set) {
        set.x = offsetX; set.y = 64;
        addSetLabel(singlePage, set);
        offsetX += set.width + 80;
      }
    });
    return;
  }

  if (pageMode === 'grouped') {
    Object.keys(COMPONENT_GROUPS).forEach(function(groupName) {
      var groupKeys = COMPONENT_GROUPS[groupName].filter(function(k) {
        return selectedComponents.indexOf(k) !== -1 && builders[k];
      });
      if (!groupKeys.length) return;
      var gPage = getOrCreatePage(groupName);
      clearPage(gPage);
      figma.currentPage = gPage;
      var offsetX = 40;
      groupKeys.forEach(function(key) {
        var set = builders[key](gPage);
        if (set) {
          set.x = offsetX; set.y = 64;
          addSetLabel(gPage, set);
          offsetX += set.width + 80;
        }
      });
    });
    return;
  }

  // per-component (default): one page per component
  selectedComponents.forEach(function(key) {
    var def = COMPONENT_DEFINITIONS[key];
    if (!def || !builders[key]) return;
    var pageName = def.name;
    if (pagesBuilt[pageName]) return;
    var pg = getOrCreatePage(pageName);
    clearPage(pg);
    figma.currentPage = pg;
    var set = builders[key](pg);
    if (set) addSetLabel(pg, set);
    pagesBuilt[pageName] = true;
  });

}

// ─── Message handler ──────────────────────────────────────────────────────────

figma.ui.onmessage = async function(msg) {
  if (msg.type === 'generate') {
    var opts = msg.options;
    try {
      sendProgress('Creating Tailwind 4 primitives… (244 variables)', 5);
      var primResult  = createPrimitivesCollection();

      sendProgress('Creating Tailwind sizing tokens (font-size, radius, border-width, opacity)…', 20);
      createSizingCollection();

      sendProgress('Creating shadcn/ui semantic themes (Light + Dark)…', 35);
      var themeResult = createThemeCollection(primResult.variableMap, opts.theme);

      if (opts.components && opts.components.length > 0) {
        sendProgress('Creating component token variables…', 60);
        createComponentCollection(opts.components, themeResult.variableMap, primResult.variableMap);
      }

      if (opts.createCanvas) {
        var fontFamily = opts.fontFamily || 'Inter';
        sendProgress('Loading fonts…', 70);

        // Load each style individually — record which ones succeed
        LOADED_STYLES = {};
        var stylesToLoad = ['Regular', 'Medium', 'Semi Bold', 'Bold'];
        for (var fi = 0; fi < stylesToLoad.length; fi++) {
          try {
            await figma.loadFontAsync({ family: fontFamily, style: stylesToLoad[fi] });
            LOADED_STYLES[fontFamily + '/' + stylesToLoad[fi]] = true;
          } catch(e) { /* style not available, skip */ }
        }

        // Canvas builds all selected canvas components (independent of token selection)
        var canvasKeys = opts.canvasComponents && opts.canvasComponents.length > 0
          ? opts.canvasComponents
          : Object.keys(COMPONENT_DEFINITIONS);

        sendProgress('Building canvas pages & components…', 75);
        buildCanvasComponents(canvasKeys, opts, fontFamily);

        // Navigate to the first built page
        if (figma.root.children.length > 0) {
          figma.currentPage = figma.root.children[0];
        }
      }

      sendProgress('All done!', 100);
      figma.ui.postMessage({ type:'done' });
    } catch (err) {
      figma.ui.postMessage({ type:'error', message: err.message || String(err) });
    }
  }
  if (msg.type === 'resize') {
    figma.ui.resize(460, msg.height);
  }
  if (msg.type === 'close') {
    figma.closePlugin();
  }
  if (msg.type === 'clear-file') {
    // Create a fresh blank page and make it active so we can safely remove all existing pages
    var freshPage = figma.createPage();
    freshPage.name = 'Page 1';
    figma.currentPage = freshPage;
    // Remove all original pages (now safe since freshPage is active)
    figma.root.children.slice().forEach(function(page) {
      if (page !== freshPage) page.remove();
    });
    // Remove all variable collections
    figma.variables.getLocalVariableCollections().forEach(function(col) {
      col.remove();
    });
    figma.ui.postMessage({ type: 'cleared' });
  }
};
