figma.showUI(__html__, { width: 460, height: 800, title: 'Scafforge' });

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

// ─── Semantic Tokens (role-based) ─────────────────────────────────────────────
// Roles: neutral, primary, destructive, success, warning, info
var DEFAULT_ROLES = { neutral:'zinc', primary:'zinc', destructive:'red', success:'green', warning:'amber', info:'sky' };
var ACTIVE_COLORS = []; // Set by the generate handler — list of selected color keys

function getSemanticTokens(roles) {
  roles = roles || DEFAULT_ROLES;
  var n = roles.neutral     || 'zinc';
  var p = roles.primary     || n;
  var d = roles.destructive || 'red';
  var s = roles.success     || 'green';
  var w = roles.warning     || 'amber';
  var i = roles.info        || 'sky';
  return {
    'background':             { light:'white',    dark: n+'-950' },
    'foreground':             { light:n+'-950',   dark: n+'-50'  },
    'card':                   { light:'white',    dark: n+'-950' },
    'card-foreground':        { light:n+'-950',   dark: n+'-50'  },
    'popover':                { light:'white',    dark: n+'-950' },
    'popover-foreground':     { light:n+'-950',   dark: n+'-50'  },
    'primary':                { light:p+'-600',   dark: p+'-400' },
    'primary-foreground':     { light:p+'-50',    dark: p+'-950' },
    'secondary':              { light:n+'-100',   dark: n+'-800' },
    'secondary-foreground':   { light:n+'-900',   dark: n+'-50'  },
    'muted':                  { light:n+'-100',   dark: n+'-800' },
    'muted-foreground':       { light:n+'-500',   dark: n+'-400' },
    'accent':                 { light:n+'-100',   dark: n+'-800' },
    'accent-foreground':      { light:n+'-900',   dark: n+'-50'  },
    'destructive':            { light:d+'-500',   dark: d+'-900' },
    'destructive-foreground': { light:n+'-50',    dark: n+'-50'  },
    'success':                { light:s+'-500',   dark: s+'-400' },
    'success-foreground':     { light:s+'-50',    dark: s+'-950' },
    'warning':                { light:w+'-500',   dark: w+'-300' },
    'warning-foreground':     { light:w+'-950',   dark: w+'-950' },
    'info':                   { light:i+'-500',   dark: i+'-400' },
    'info-foreground':        { light:i+'-50',    dark: i+'-950' },
    'border':                 { light:n+'-200',   dark: n+'-800' },
    'input':                  { light:n+'-200',   dark: n+'-800' },
    'ring':                   { light:p+'-500',   dark: p+'-300' },
    'primary-hover':          { light:p+'-700',   dark: p+'-200' },
    'destructive-hover':      { light:d+'-600',   dark: d+'-800' },
    'secondary-hover':        { light:n+'-200',   dark: n+'-700' },
    'disabled':               { light:n+'-200',   dark: n+'-700' },
    'disabled-foreground':    { light:n+'-400',   dark: n+'-500' },
    'chart-1':                { light:p+'-500',   dark: p+'-400' },
    'chart-2':                { light:s+'-500',   dark: s+'-400' },
    'chart-3':                { light:i+'-500',   dark: i+'-400' },
    'chart-4':                { light:w+'-500',   dark: w+'-400' },
    'chart-5':                { light:d+'-500',   dark: d+'-400' },
  };
}
function getImprovedSemanticTokens(roles) {
  roles = roles || DEFAULT_ROLES;
  var n = roles.neutral     || 'zinc';
  var p = roles.primary     || n;
  var d = roles.destructive || 'red';
  var s = roles.success     || 'green';
  var w = roles.warning     || 'amber';
  var i = roles.info        || 'sky';
  return {
    // ── fg/ (foreground) ──
    'fg/over-theme':      { light:p+'-50',   dark: p+'-950' },
    'fg/over-primary':    { light:'white',    dark: n+'-950' },
    'fg/link':            { light:p+'-700',   dark: p+'-300' },
    'fg/highlight-1':     { light:p+'-600',   dark: p+'-400' },
    'fg/highlight-2':     { light:p+'-500',   dark: p+'-300' },
    'fg/highlight-3':     { light:p+'-700',   dark: p+'-200' },
    'fg/neutral-1':       { light:n+'-950',   dark: n+'-50'  },
    'fg/neutral-2':       { light:n+'-700',   dark: n+'-300' },
    'fg/neutral-3':       { light:n+'-500',   dark: n+'-400' },
    'fg/neutral-4':       { light:n+'-400',   dark: n+'-500' },
    'fg/neutral-5':       { light:n+'-300',   dark: n+'-600' },
    'fg/brand':           { light:p+'-600',   dark: p+'-800' },
    'fg/alert-1':         { light:w+'-600',   dark: w+'-400' },
    'fg/alert-2':         { light:w+'-500',   dark: w+'-300' },
    'fg/destructive-1':   { light:d+'-600',   dark: d+'-400' },
    'fg/destructive-2':   { light:d+'-500',   dark: d+'-300' },
    'fg/destructive-3':   { light:d+'-700',   dark: d+'-200' },
    'fg/info-1':          { light:i+'-600',   dark: i+'-400' },
    'fg/positive-1':      { light:s+'-600',   dark: s+'-400' },

    // ── bg/ (background) ──
    'bg/no-bg':           { light:'transparent', dark: 'transparent' },
    'bg/highlight':       { light:p+'-600',   dark: p+'-400' },
    'bg/highlight-2':     { light:p+'-100',   dark: p+'-900' },
    'bg/highlight-3':     { light:p+'-50',    dark: p+'-950' },
    'bg/highlight-4':     { light:p+'-700',   dark: p+'-200' },
    'bg/level-inverse':   { light:n+'-800',   dark: n+'-200' },
    'bg/neutral':         { light:'white',    dark: n+'-950' },
    'bg/neutral-2':       { light:n+'-50',    dark: n+'-900' },
    'bg/neutral-3':       { light:n+'-100',   dark: n+'-800' },
    'bg/brand-1':         { light:p+'-600',   dark: p+'-500' },
    'bg/brand-2':         { light:p+'-50',    dark: p+'-950' },
    'bg/alert-1':         { light:w+'-100',   dark: w+'-900' },
    'bg/destructive-1':   { light:d+'-500',   dark: d+'-900' },
    'bg/destructive-2':   { light:d+'-100',   dark: d+'-900' },
    'bg/destructive-3':   { light:d+'-50',    dark: d+'-950' },
    'bg/info-1':          { light:i+'-100',   dark: i+'-900' },
    'bg/positive-1':      { light:s+'-100',   dark: s+'-900' },

    // ── hover/ ──
    'bg/highlight-hover': { light:p+'-700',   dark: p+'-300' },
    'bg/neutral-3-hover': { light:n+'-200',   dark: n+'-700' },
    'bg/destructive-1-hover': { light:d+'-600', dark: d+'-800' },

    // ── border/ ──
    'border/highlight':   { light:p+'-300',   dark: p+'-700' },
    'border/highlight-2': { light:p+'-200',   dark: p+'-800' },
    'border/neutral':     { light:n+'-200',   dark: n+'-800' },
    'border/neutral-2':   { light:n+'-300',   dark: n+'-700' },
    'border/destructive': { light:d+'-300',   dark: d+'-700' },
    'border/alert':       { light:w+'-300',   dark: w+'-700' },
    'border/info':        { light:i+'-300',   dark: i+'-700' },
    'border/positive':    { light:s+'-300',   dark: s+'-700' },

  };
}

var SEMANTIC_TOKENS = getSemanticTokens(DEFAULT_ROLES);

// Maps classic theme token names → Ale Style token names
// Used by vp() to auto-resolve when in Ale mode
var ALE_TOKEN_MAP = {
  'background':             'bg/neutral',
  'foreground':             'fg/neutral-1',
  'card':                   'bg/neutral',
  'card-foreground':        'fg/neutral-1',
  'primary':                'bg/highlight',
  'primary-foreground':     'fg/over-theme',
  'primary-hover':          'bg/highlight-hover',
  'secondary':              'bg/neutral-3',
  'secondary-foreground':   'fg/neutral-1',
  'secondary-hover':        'bg/neutral-3-hover',
  'muted':                  'bg/neutral-3',
  'muted-foreground':       'fg/neutral-3',
  'accent':                 'bg/neutral-3',
  'accent-foreground':      'fg/neutral-1',
  'destructive':            'bg/destructive-1',
  'destructive-foreground': 'fg/over-primary',
  'destructive-hover':      'bg/destructive-1-hover',
  'disabled-foreground':    'fg/neutral-4',
  'border':                 'border/neutral',
  'input':                  'border/neutral',
  'ring':                   'border/highlight',
};
var USE_ALE_MAP = false; // Set to true during generation in Ale mode

// ─── Component Token Definitions ─────────────────────────────────────────────
var COMPONENT_DEFINITIONS = {
  buttongroup: { name:'Button Group', group:'Controls', tokens:{} },
  button: { name:'Button', group:'Controls',
    tokens: {
      'button/default/background':           {light:'alias:primary',               dark:'alias:primary'},
      'button/default/foreground':           {light:'alias:primary-foreground',    dark:'alias:primary-foreground'},
      'button/default/hover-background':     {light:'alias:primary-hover',         dark:'alias:primary-hover'},
      'button/destructive/background':       {light:'alias:destructive',           dark:'alias:destructive'},
      'button/destructive/foreground':       {light:'alias:destructive-foreground',dark:'alias:destructive-foreground'},
      'button/destructive/hover-background': {light:'alias:destructive-hover',     dark:'alias:destructive-hover'},
      'button/outline/background':           {light:'alias:background',            dark:'alias:background'},
      'button/outline/foreground':           {light:'alias:foreground',            dark:'alias:foreground'},
      'button/outline/border':               {light:'alias:border',                dark:'alias:border'},
      'button/outline/hover-background':     {light:'alias:accent',                dark:'alias:accent'},
      'button/outline/hover-foreground':     {light:'alias:accent-foreground',     dark:'alias:accent-foreground'},
      'button/secondary/background':         {light:'alias:secondary',             dark:'alias:secondary'},
      'button/secondary/foreground':         {light:'alias:secondary-foreground',  dark:'alias:secondary-foreground'},
      'button/secondary/hover-background':   {light:'alias:secondary-hover',       dark:'alias:secondary-hover'},
      'button/ghost/background':             {light:'transparent',                 dark:'transparent'},
      'button/ghost/foreground':             {light:'alias:foreground',            dark:'alias:foreground'},
      'button/ghost/hover-background':       {light:'alias:accent',                dark:'alias:accent'},
      'button/ghost/hover-foreground':       {light:'alias:accent-foreground',     dark:'alias:accent-foreground'},
      'button/link/foreground':              {light:'alias:primary',               dark:'alias:primary'},
      'button/link/hover-foreground':        {light:'alias:muted-foreground',      dark:'alias:muted-foreground'},
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
      'input/disabled-background': {light:'alias:muted',             dark:'alias:muted'},
      'input/disabled-text':       {light:'alias:disabled-foreground', dark:'alias:disabled-foreground'},
    }
  },
  switch: { name:'Switch', group:'Forms',
    tokens: {
      'switch/track-checked':   {light:'alias:primary', dark:'alias:primary'},
      'switch/track-unchecked': {light:'alias:input',   dark:'alias:input'},
      'switch/thumb':           {light:'white',          dark:'white'},
      'switch/disabled-track':  {light:'alias:disabled',             dark:'alias:disabled'},
      'switch/disabled-thumb':  {light:'alias:disabled-foreground', dark:'alias:disabled-foreground'},
    }
  },
  checkbox: { name:'Checkbox', group:'Forms',
    tokens: {
      'checkbox/background-checked':  {light:'alias:primary',            dark:'alias:primary'},
      'checkbox/background-default':  {light:'alias:background',         dark:'alias:background'},
      'checkbox/border':              {light:'alias:primary',            dark:'alias:primary'},
      'checkbox/indicator':           {light:'alias:primary-foreground', dark:'alias:primary-foreground'},
      'checkbox/disabled':            {light:'alias:disabled',             dark:'alias:disabled'},
    }
  },
  select: { name:'Select', group:'Forms',
    tokens: {
      'select/background':       {light:'alias:background',        dark:'alias:background'},
      'select/border':           {light:'alias:input',             dark:'alias:input'},
      'select/ring':             {light:'alias:ring',              dark:'alias:ring'},
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
      'radio/disabled':   {light:'alias:disabled',     dark:'alias:disabled'},
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
// Icon data is fetched from CDN at runtime (see ui.html).
// The backend receives it via the generate message as options.iconData.
// RUNTIME_ICONS is set from that payload before building icon pages.
var RUNTIME_ICONS = {};

// ─── Icon page builder ────────────────────────────────────────────────────────
function buildIconPage(page, libraryName, icons) {
  var ICON_SZ = 24;
  var CELL    = 48; // cell size for padding around icon
  var COLS    = 16;
  var PAD     = 24;
  var keys    = Object.keys(icons);
  var rows    = Math.ceil(keys.length / COLS);

  var sw = libraryName === 'Iconoir' ? '1.5' : '2';
  var svgWrap = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18181b" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round">';

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

async function removeExistingCollection(name) {
  (await figma.variables.getLocalVariableCollectionsAsync()).forEach(function(c) {
    if (c.name === name) c.remove();
  });
}

// ─── Variable Collections ─────────────────────────────────────────────────────
async function createPrimitivesCollection(selectedColors, opacitySteps) {
  await removeExistingCollection('Primitives');
  var col = figma.variables.createVariableCollection('Primitives');
  var mid = col.defaultModeId;
  col.renameMode(mid, 'Default');
  var map = {};
  // Only include selected colors (fallback to all if none specified)
  var colorKeys = selectedColors && selectedColors.length > 0
    ? selectedColors.filter(function(k) { return TW_COLORS[k]; })
    : Object.keys(TW_COLORS);
  colorKeys.forEach(function(name) {
    var shades = Object.keys(TW_COLORS[name]);
    shades.forEach(function(shade) {
      var hex = TW_COLORS[name][shade];
      var v = figma.variables.createVariable(name+'/'+shade, col, 'COLOR');
      v.setValueForMode(mid, hexToRgba(hex));
      v.scopes = ['ALL_FILLS', 'STROKE_COLOR'];
      map[name+'-'+shade] = v.id;
    });
    // Opacity variants for this color
    if (opacitySteps && opacitySteps.length > 0) {
      shades.forEach(function(shade) {
        var hex = TW_COLORS[name][shade];
        opacitySteps.forEach(function(step) {
          var varName = name+'/'+shade+'/'+step;
          var v = figma.variables.createVariable(varName, col, 'COLOR');
          v.setValueForMode(mid, hexToRgba(hex, step / 100));
          v.scopes = ['ALL_FILLS', 'STROKE_COLOR'];
          map[name+'-'+shade+'-'+step] = v.id;
        });
      });
    }
  });
  var black = figma.variables.createVariable('black', col, 'COLOR');
  black.setValueForMode(mid, {r:0,g:0,b:0,a:1});
  map['black'] = black.id;
  var white = figma.variables.createVariable('white', col, 'COLOR');
  white.setValueForMode(mid, {r:1,g:1,b:1,a:1});
  map['white'] = white.id;
  return { collection:col, variableMap:map };
}

async function createThemeCollection(primMap, roles, tokenStructure) {
  await removeExistingCollection('Themes');
  await removeExistingCollection('Ale/Themes');
  var colName = tokenStructure === 'improved' ? 'Ale/Themes' : 'Themes';
  var col = figma.variables.createVariableCollection(colName);
  var lightId = col.defaultModeId;
  col.renameMode(lightId, 'Light');
  var darkId = col.addMode('Dark');
  var map = {};
  var tokens = tokenStructure === 'improved'
    ? getImprovedSemanticTokens(roles)
    : getSemanticTokens(roles);
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

async function createSizingCollection(opts) {
  opts = opts || {};
  await removeExistingCollection('Sizing');
  var col = figma.variables.createVariableCollection('Sizing');
  var mid = col.defaultModeId;
  col.renameMode(mid, 'Default');

  function makeFloat(name, value, scopes) {
    var v = figma.variables.createVariable(name, col, 'FLOAT');
    v.setValueForMode(mid, value);
    if (scopes) v.scopes = scopes;
  }

  // Font sizes (px)
  if (opts.includeFontSizes !== false) {
    [['xs',12],['sm',14],['base',16],['lg',18],['xl',20],['2xl',24],['3xl',30],['4xl',36],['5xl',48],['6xl',60],['7xl',72],['8xl',96],['9xl',128]].forEach(function(p) {
      makeFloat('font-size/' + p[0], p[1], ['FONT_SIZE', 'LINE_HEIGHT', 'LETTER_SPACING', 'PARAGRAPH_SPACING', 'PARAGRAPH_INDENT']);
    });
  }

  // Border radius (px)
  if (opts.includeRadius !== false) {
    [['none',0],['sm',2],['DEFAULT',4],['md',6],['lg',8],['xl',12],['2xl',16],['3xl',24],['full',9999]].forEach(function(p) {
      makeFloat('radius/' + p[0], p[1], ['CORNER_RADIUS']);
    });
  }

  // Border width (px)
  if (opts.includeBorderWidth !== false) {
    [['0',0],['DEFAULT',1],['2',2],['4',4],['8',8]].forEach(function(p) {
      makeFloat('border-width/' + p[0], p[1], ['STROKE_FLOAT']);
    });
  }

  // Spacing (px) — used for padding, gap, and sizing
  if (opts.includeSpacing !== false) {
    [['0',0],['px',1],['0-5',2],['1',4],['1-5',6],['2',8],['2-5',10],['3',12],['3-5',14],['4',16],['5',20],['6',24],['7',28],['8',32],['9',36],['10',40],['11',44],['12',48],['14',56],['16',64],['20',80],['24',96],['28',112],['32',128],['36',144],['40',160],['44',176],['48',192],['52',208],['56',224],['60',240],['64',256],['72',288],['80',320],['96',384]].forEach(function(p) {
      makeFloat('spacing/' + p[0], p[1], ['WIDTH_HEIGHT', 'GAP']);
    });
  }

  // Opacity (0–1)
  if (opts.includeOpacityVars !== false) {
    [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100].forEach(function(n) {
      makeFloat('opacity/' + n, n / 100, ['OPACITY']);
    });
  }
}

// ─── Shadow Effect Styles ──────────────────────────────────────────────────
async function createShadowStyles() {
  // Remove existing shadow styles
  (await figma.getLocalEffectStylesAsync()).forEach(function(s) {
    if (s.name.indexOf('shadow/') === 0) s.remove();
  });

  var shadows = [
    { name: 'shadow/sm', effects: [
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.05}, offset:{x:0,y:1}, radius:2, spread:0, visible:true, blendMode:'NORMAL' }
    ]},
    { name: 'shadow/DEFAULT', effects: [
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:1}, radius:3, spread:0, visible:true, blendMode:'NORMAL' },
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:1}, radius:2, spread:-1, visible:true, blendMode:'NORMAL' }
    ]},
    { name: 'shadow/md', effects: [
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:4}, radius:6, spread:-1, visible:true, blendMode:'NORMAL' },
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:2}, radius:4, spread:-2, visible:true, blendMode:'NORMAL' }
    ]},
    { name: 'shadow/lg', effects: [
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:10}, radius:15, spread:-3, visible:true, blendMode:'NORMAL' },
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:4}, radius:6, spread:-4, visible:true, blendMode:'NORMAL' }
    ]},
    { name: 'shadow/xl', effects: [
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:20}, radius:25, spread:-5, visible:true, blendMode:'NORMAL' },
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.1}, offset:{x:0,y:8}, radius:10, spread:-6, visible:true, blendMode:'NORMAL' }
    ]},
    { name: 'shadow/2xl', effects: [
      { type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.25}, offset:{x:0,y:25}, radius:50, spread:-12, visible:true, blendMode:'NORMAL' }
    ]},
    { name: 'shadow/inner', effects: [
      { type:'INNER_SHADOW', color:{r:0,g:0,b:0,a:0.05}, offset:{x:0,y:2}, radius:4, spread:0, visible:true, blendMode:'NORMAL' }
    ]},
  ];

  shadows.forEach(function(s) {
    var style = figma.createEffectStyle();
    style.name = s.name;
    style.effects = s.effects;
  });
}

// ─── Text Styles ───────────────────────────────────────────────────────────
async function createTextStyles(fontFamily) {
  // Remove existing text styles generated by us
  (await figma.getLocalTextStylesAsync()).forEach(function(s) {
    if (s.name.indexOf('text/') === 0) s.remove();
  });

  var sizes = [
    ['xs',12,16],['sm',14,20],['base',16,24],['lg',18,28],['xl',20,28],
    ['2xl',24,32],['3xl',30,36],['4xl',36,40],['5xl',48,48],
    ['6xl',60,60],['7xl',72,72],['8xl',96,96],['9xl',128,128]
  ];

  var font = { family: fontFamily || 'Inter', style: 'Regular' };
  try { await figma.loadFontAsync(font); } catch(e) { font = { family:'Inter', style:'Regular' }; }

  sizes.forEach(function(s) {
    var style = figma.createTextStyle();
    style.name = 'text/' + s[0];
    style.fontName = font;
    style.fontSize = s[1];
    style.lineHeight = { value: s[2], unit: 'PIXELS' };
  });
}

async function createComponentCollection(selectedComponents, themeMap, primMap) {
  if (!selectedComponents.length) return;
  await removeExistingCollection('shadcn / Components');
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
  if (opts && opts.radius) setRadius(f, opts.radius);
  return f;
}

function makeAutoFrame(name, direction, gap, padding, opts) {
  var f = figma.createFrame();
  f.name            = name;
  f.layoutMode      = direction; // 'HORIZONTAL' or 'VERTICAL'
  setGap(f, gap);
  setPadding(f, padding);
  f.primaryAxisSizingMode   = 'AUTO';
  f.counterAxisSizingMode   = 'AUTO';
  if (opts && opts.fill)   setFill(f, opts.fill);
  else f.fills = [];
  if (opts && opts.radius) setRadius(f, opts.radius);
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
var FLOAT_CACHE = null;

async function buildVarCache() {
  VAR_CACHE = {};
  (await figma.variables.getLocalVariablesAsync('COLOR')).forEach(function(v) {
    VAR_CACHE[v.name] = v;
  });
  FLOAT_CACHE = {};
  (await figma.variables.getLocalVariablesAsync('FLOAT')).forEach(function(v) {
    FLOAT_CACHE[v.name] = v;
  });
}

// Returns a SOLID paint, bound to a variable if found, else fallback hex
// tokenName can be a theme token ('primary') or component token ('button/default/background').
// Tries exact match first. If a compToken (3rd arg) is given, tries that first.
// In Ale mode, classic token names are mapped to Ale Style equivalents automatically.
function vp(tokenName, fallbackHex, compToken) {
  var c = fallbackHex ? rgb(fallbackHex) : { r:0.5, g:0.5, b:0.5 };
  var base = { type:'SOLID', color:c };
  if (VAR_CACHE) {
    // In classic mode, try component token first
    if (compToken && VAR_CACHE[compToken]) {
      return figma.variables.setBoundVariableForPaint(base, 'color', VAR_CACHE[compToken]);
    }
    // In Ale mode, map classic name → Ale name
    if (USE_ALE_MAP && tokenName && ALE_TOKEN_MAP[tokenName]) {
      var aleName = ALE_TOKEN_MAP[tokenName];
      if (VAR_CACHE[aleName]) {
        return figma.variables.setBoundVariableForPaint(base, 'color', VAR_CACHE[aleName]);
      }
    }
    // Direct match (works for both classic theme tokens and already-Ale-named tokens)
    if (tokenName && VAR_CACHE[tokenName]) {
      return figma.variables.setBoundVariableForPaint(base, 'color', VAR_CACHE[tokenName]);
    }
  }
  return base;
}

// Convenience: bind to component token if available, else theme token
function cvp(compToken, themeToken, fallbackHex) {
  return vp(themeToken, fallbackHex, compToken);
}

// Bind a FLOAT variable to a node property (cornerRadius, fontSize, padding, etc.)
// field: the VariableBindableNodeField — e.g. 'topLeftRadius', 'fontSize', 'paddingLeft', 'itemSpacing'
function bindFloat(node, field, varName) {
  if (FLOAT_CACHE && varName && FLOAT_CACHE[varName]) {
    node.setBoundVariable(field, FLOAT_CACHE[varName]);
  }
}

// Bind cornerRadius to a radius/* variable on all four corners
function bindRadius(node, varName) {
  if (FLOAT_CACHE && varName && FLOAT_CACHE[varName]) {
    node.setBoundVariable('topLeftRadius', FLOAT_CACHE[varName]);
    node.setBoundVariable('topRightRadius', FLOAT_CACHE[varName]);
    node.setBoundVariable('bottomLeftRadius', FLOAT_CACHE[varName]);
    node.setBoundVariable('bottomRightRadius', FLOAT_CACHE[varName]);
  }
}

// ── Value-to-variable lookup tables ──────────────────────────────────────────
var RADIUS_MAP = {0:'radius/none',2:'radius/sm',4:'radius/DEFAULT',6:'radius/md',8:'radius/lg',12:'radius/xl',16:'radius/2xl',24:'radius/3xl',9999:'radius/full'};
var FONT_SIZE_MAP = {12:'font-size/xs',14:'font-size/sm',16:'font-size/base',18:'font-size/lg',20:'font-size/xl',24:'font-size/2xl',30:'font-size/3xl',36:'font-size/4xl',48:'font-size/5xl'};

// Set cornerRadius and bind to the closest radius variable
function setRadius(node, value) {
  node.cornerRadius = value;
  var varName = RADIUS_MAP[value];
  if (varName) bindRadius(node, varName);
}

// Set fontSize on a text node and bind to the closest font-size variable
function setFontSize(node, value) {
  node.fontSize = value;
  var varName = FONT_SIZE_MAP[value];
  if (varName) bindFloat(node, 'fontSize', varName);
}

// Spacing value → variable name mapping
var SPACING_MAP = {0:'spacing/0',1:'spacing/px',2:'spacing/0-5',4:'spacing/1',6:'spacing/1-5',8:'spacing/2',10:'spacing/2-5',12:'spacing/3',14:'spacing/3-5',16:'spacing/4',20:'spacing/5',24:'spacing/6',28:'spacing/7',32:'spacing/8',36:'spacing/9',40:'spacing/10',44:'spacing/11',48:'spacing/12',56:'spacing/14',64:'spacing/16',80:'spacing/20',96:'spacing/24'};

// Set padding on all sides and bind to spacing variable
function setPadding(node, value) {
  node.paddingTop = node.paddingBottom = node.paddingLeft = node.paddingRight = value;
  var varName = SPACING_MAP[value];
  if (varName) {
    bindFloat(node, 'paddingTop', varName);
    bindFloat(node, 'paddingBottom', varName);
    bindFloat(node, 'paddingLeft', varName);
    bindFloat(node, 'paddingRight', varName);
  }
}

// Set horizontal padding (left + right) and bind
function setPaddingH(node, value) {
  node.paddingLeft = node.paddingRight = value;
  var varName = SPACING_MAP[value];
  if (varName) {
    bindFloat(node, 'paddingLeft', varName);
    bindFloat(node, 'paddingRight', varName);
  }
}

// Set vertical padding (top + bottom) and bind
function setPaddingV(node, value) {
  node.paddingTop = node.paddingBottom = value;
  var varName = SPACING_MAP[value];
  if (varName) {
    bindFloat(node, 'paddingTop', varName);
    bindFloat(node, 'paddingBottom', varName);
  }
}

// Set itemSpacing and bind to spacing variable
function setGap(node, value) {
  node.itemSpacing = value;
  var varName = SPACING_MAP[value];
  if (varName) bindFloat(node, 'itemSpacing', varName);
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
// tintIcon accepts either a hex string or a pre-built paint object (from vp/cvp)
function tintIcon(node, colorOrPaint) {
  var paint = (typeof colorOrPaint === 'string') ? solidPaint(colorOrPaint) : colorOrPaint;
  function walk(n) {
    if (n.type === 'VECTOR') {
      if (n.strokes && n.strokes.length > 0) n.strokes = [paint];
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
function addCheckmark(parent, boxSize, color, paintObj) {
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
  v.strokes       = [paintObj || solidPaint(color || '#ffffff')];
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

// Arrange an array of ComponentSets on a page in a wrapping grid.
// Sets flow left-to-right; when a row would exceed MAX_ROW_W they wrap down.
function placeComponentSets(page, sets) {
  var MARGIN   = 64;
  var COL_GAP  = 80;
  var ROW_GAP  = 120;
  var LABEL_H  = 32;
  var MAX_ROW_W = 2800;

  var x = MARGIN;
  var y = MARGIN + LABEL_H;
  var rowMaxH = 0;

  sets.forEach(function(set) {
    // Wrap if this set won't fit on the current row (and we're not at the start)
    if (x > MARGIN && x + set.width > MAX_ROW_W) {
      x = MARGIN;
      y += rowMaxH + ROW_GAP + LABEL_H;
      rowMaxH = 0;
    }
    set.x = x;
    set.y = y;
    addSetLabel(page, set);
    x += set.width + COL_GAP;
    if (set.height > rowMaxH) rowMaxH = set.height;
  });
}

// Apply wrapping auto-layout to a ComponentSet so variants wrap into a grid.
// Strategy: let Figma compute the single-row width first (AUTO), then cap it
// to TARGET_MAX_W so WRAP kicks in and creates multiple rows.
function layoutSet(set, gap) {
  gap = gap !== undefined ? gap : 20;
  set.layoutMode = 'HORIZONTAL';
  set.layoutWrap = 'WRAP';
  set.itemSpacing = gap;
  set.counterAxisSpacing = gap;
  set.paddingTop = set.paddingBottom = set.paddingLeft = set.paddingRight = gap;
  set.primaryAxisSizingMode = 'AUTO';
  set.counterAxisSizingMode = 'AUTO';

  // Cap width so variants wrap into a grid instead of a single endless row.
  // Only applies when the auto-computed single-row width exceeds the target.
  var TARGET_MAX_W = 1200;
  if (set.width > TARGET_MAX_W) {
    var rowH = set.height; // single-row height before wrapping
    set.primaryAxisSizingMode = 'FIXED';
    set.resize(TARGET_MAX_W, rowH);
    set.counterAxisSizingMode = 'AUTO'; // let height grow to fit wrapped rows
  }
}

// ── Component builders — real Figma ComponentSets via combineAsVariants ───────

function buildButtonPage(page) {
  var variants = [
    { key:'default',     label:'Default',     bg:'#18181b', fg:'#fafafa', hBg:'#3f3f46', hFg:null,     border:null,      bgTok:'primary',              fgTok:'primary-foreground',     hBgTok:'primary-hover',                                                     cBg:'button/default/background',      cFg:'button/default/foreground',      cHBg:'button/default/hover-background' },
    { key:'destructive', label:'Destructive', bg:'#ef4444', fg:'#fafafa', hBg:'#dc2626', hFg:null,     border:null,      bgTok:'destructive',           fgTok:'destructive-foreground', hBgTok:'destructive-hover',                                                 cBg:'button/destructive/background',  cFg:'button/destructive/foreground',  cHBg:'button/destructive/hover-background' },
    { key:'outline',     label:'Outline',     bg:'#ffffff', fg:'#18181b', hBg:'#f4f4f5', hFg:'#18181b',border:'#e4e4e7', bgTok:'background',            fgTok:'foreground',             hBgTok:'accent',            brdTok:'border', hFgTok:'accent-foreground',  cBg:'button/outline/background',      cFg:'button/outline/foreground',      cHBg:'button/outline/hover-background',   cBrd:'button/outline/border', cHFg:'button/outline/hover-foreground' },
    { key:'secondary',   label:'Secondary',   bg:'#f4f4f5', fg:'#18181b', hBg:'#e4e4e7', hFg:null,     border:null,      bgTok:'secondary',             fgTok:'secondary-foreground',   hBgTok:'secondary-hover',                                                   cBg:'button/secondary/background',    cFg:'button/secondary/foreground',    cHBg:'button/secondary/hover-background' },
    { key:'ghost',       label:'Ghost',       bg:null,      fg:'#18181b', hBg:'#f4f4f5', hFg:null,     border:null,      bgTok:null,                    fgTok:'foreground',             hBgTok:'accent',                             hFgTok:'accent-foreground',                                            cFg:'button/ghost/foreground',        cHBg:'button/ghost/hover-background',     cHFg:'button/ghost/hover-foreground' },
    { key:'link',        label:'Link',        bg:null,      fg:'#18181b', hBg:null,       hFg:'#3f3f46',border:null,      bgTok:null,                    fgTok:'primary',                hBgTok:null,                                 hFgTok:'primary-hover',                                                cFg:'button/link/foreground',                                                    cHFg:'button/link/hover-foreground' },
  ];
  // Sizes: width, height and font scale relative to the active style
  var sizes = [
    { key:'sm',   label:'sm',      w:96,        h:Math.max(S.btnH - 8, 24), fz:Math.max(S.fontSize - 1, 10), px:12 },
    { key:'md',   label:'Default', w:120,       h:S.btnH,                   fz:S.fontSize,                   px:16 },
    { key:'lg',   label:'lg',      w:160,       h:S.btnH + 4,               fz:S.fontSize + 2,               px:24 },
    { key:'icon-sm', label:'icon-sm', w:Math.max(S.btnH - 8, 24), h:Math.max(S.btnH - 8, 24), fz:Math.max(S.fontSize - 1, 10), px:0 },
    { key:'icon',    label:'icon',    w:S.btnH,                   h:S.btnH,                   fz:S.fontSize,                   px:0 },
    { key:'icon-lg', label:'icon-lg', w:S.btnH + 4,               h:S.btnH + 4,               fz:S.fontSize + 2,               px:0 },
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
        setRadius(comp, Math.min(S.radius, Math.floor(sz.h / 2)));
        comp.clipsContent = true;
        comp.layoutMode = 'HORIZONTAL';
        comp.primaryAxisSizingMode = 'FIXED';
        comp.counterAxisSizingMode = 'FIXED';
        comp.primaryAxisAlignItems = 'CENTER';
        comp.counterAxisAlignItems = 'CENTER';
        setPaddingH(comp, sz.px);

        var bgPaint;
        if (state === 'Hover' && v.hBgTok) {
          bgPaint = vp(v.hBgTok, v.hBg || v.bg || '#f4f4f5', v.cHBg);
        } else if (v.bgTok) {
          bgPaint = vp(v.bgTok, v.bg || '#ffffff', v.cBg);
        }
        comp.fills = bgPaint ? [bgPaint] : [];

        if (v.border) {
          comp.strokes = [vp(v.brdTok || '', v.border, v.cBrd)];
          comp.strokeWeight = 1;
          comp.strokeAlign = 'INSIDE';
        }
        if (state === 'Disabled') comp.opacity = 0.4;

        // Resolve foreground token (shared by icon and text)
        var fgHex = v.fg || '#18181b';
        var fgTok, cFgTok;
        if (state === 'Hover' && v.hFgTok) { fgTok = v.hFgTok; fgHex = v.hFg || fgHex; cFgTok = v.cHFg; }
        else { fgTok = v.fgTok; cFgTok = v.cFg; }
        var fgPaint = vp(fgTok || '', fgHex, cFgTok);

        if (sz.key.indexOf('icon') === 0) {
          var iconInst = getIcon('plus');
          if (iconInst) {
            tintIcon(iconInst, fgPaint);
            comp.appendChild(iconInst);
            iconInst.layoutSizingHorizontal = 'FIXED';
            iconInst.layoutSizingVertical = 'FIXED';
          } else {
            var icon = figma.createFrame();
            icon.name = 'icon-placeholder';
            icon.resize(sz.fz, sz.fz);
            icon.cornerRadius = 2;
            icon.fills = [];
            icon.strokes = [fgPaint];
            icon.strokeWeight = 1.5;
            comp.appendChild(icon);
          }
        } else {
          var t = figma.createText();
          t.characters = v.label;
          t.fontSize = sz.fz;
          t.fontName = fontName('Medium');
          t.fills = [fgPaint];
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
    setGap(groupComp, GAP);
    setPadding(groupComp, 0);

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
  return set;
}

function buildLabelPage(page) {
  var defs = [
    { label:'Default',  text:'Label',            suffix:null,        suffixColor:null,      textTok:'foreground',  opacity:1   },
    { label:'Required', text:'Label',             suffix:' *',        suffixColor:'#ef4444', textTok:'foreground',  opacity:1   },
    { label:'Optional', text:'Label',             suffix:' Optional', suffixColor:'#a1a1aa', textTok:'foreground',  opacity:1   },
    { label:'Disabled', text:'Label',             suffix:null,        suffixColor:null,      textTok:'muted-foreground',       opacity:0.6 },
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
    setGap(comp, 0);
    setPadding(comp, 0);

    var t = figma.createText();
    t.characters = d.text;
    t.fontSize = S.fontSize;
    t.fontName = fontName('Medium');
    t.fills = [cvp(d.textTok === 'foreground' ? 'label/foreground' : 'label/muted', d.textTok, '#18181b')];
    comp.appendChild(t);
    t.layoutSizingHorizontal = 'HUG';
    t.layoutSizingVertical = 'HUG';

    if (d.suffix) {
      var s = figma.createText();
      s.characters = d.suffix;
      s.fontSize = S.fontSize;
      s.fontName = d.label === 'Required' ? fontName('Medium') : fontName('Regular');
      s.fills = [d.label === 'Required'
        ? cvp('label/required', 'destructive', d.suffixColor)
        : cvp('label/muted', 'muted-foreground', d.suffixColor)];
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
    t.fills = [vp(labelState === 'Disabled' ? 'muted-foreground' : 'foreground', '#18181b')];
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
    setGap(comp, LBL_GAP);
    setPadding(comp, 0);

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
    hlp.fills = [vp(isError ? 'destructive' : 'muted-foreground', isError ? '#ef4444' : '#a1a1aa')];
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
    setGap(comp, CTRL_GAP);
    setPadding(comp, 0);

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
    setGap(textGroup, 2);
    setPadding(textGroup, 0);

    var lbl = figma.createText();
    lbl.characters = labelText;
    lbl.fontSize = S.fontSize;
    lbl.fontName = fontName('Medium');
    lbl.fills = [vp(disabled ? 'muted-foreground' : 'foreground', disabled ? '#a1a1aa' : '#18181b')];
    textGroup.appendChild(lbl);
    lbl.layoutSizingHorizontal = 'HUG';
    lbl.layoutSizingVertical = 'HUG';

    var desc = figma.createText();
    desc.characters = descText;
    desc.fontSize = helperFz;
    desc.fontName = fontName('Regular');
    desc.fills = [vp('muted-foreground', '#a1a1aa')];
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
  return set;
}

function buildInputPage(page) {
  var defs = [
    { label:'Default',  bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'Placeholder text',   phColor:'#a1a1aa', bgTok:'background', brdTok:'input',    phTok:'muted-foreground', cBg:'input/background', cBrd:'input/border', cPh:'input/placeholder' },
    { label:'Focus',    bg:'#ffffff', border:'#18181b', sw:2, ph:'Focused input',       phColor:'#a1a1aa', bgTok:'background', brdTok:'ring',      phTok:'muted-foreground', cBg:'input/background', cBrd:'input/ring', cPh:'input/placeholder' },
    { label:'Filled',   bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'user@example.com',   phColor:'#18181b', bgTok:'background', brdTok:'input',    phTok:'foreground',        cBg:'input/background', cBrd:'input/border', cPh:'input/text' },
    { label:'Error',    bg:'#ffffff', border:'#ef4444', sw:1, ph:'invalid@',            phColor:'#18181b', bgTok:'background', brdTok:'destructive',     phTok:'foreground',        cBg:'input/background', cBrd:'input/error-border', cPh:'input/text' },
    { label:'Disabled', bg:'#f4f4f5', border:'#e4e4e7', sw:1, ph:'Disabled input',     phColor:'#a1a1aa', bgTok:'muted', brdTok:'input', phTok:'disabled-foreground', opacity:0.6, cBg:'input/disabled-background', cBrd:'input/border', cPh:'input/disabled-text' },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = 'State=' + s.label;
    comp.resize(S.inputW, S.inputH);
    setRadius(comp, S.radius);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    setPaddingH(comp, 12);
    comp.fills = [cvp(s.cBg, s.bgTok, s.bg)];
    comp.strokes = [cvp(s.cBrd, s.brdTok, s.border)];
    comp.strokeWeight = s.sw;
    comp.strokeAlign = 'INSIDE';
    if (s.opacity) comp.opacity = s.opacity;
    var ph = figma.createText();
    ph.characters = s.ph;
    ph.fontSize = S.fontSize;
    ph.fontName = fontName('Regular');
    ph.fills = [cvp(s.cPh, s.phTok, s.phColor)];
    comp.appendChild(ph);
    ph.layoutSizingHorizontal = 'FILL';
    ph.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Input';
  layoutSet(set);
  INPUT_COMP_CACHE = {};
  allComps.forEach(function(c) { INPUT_COMP_CACHE[c.name] = c; });
  return set;
}

function buildTextareaPage(page) {
  var defs = [
    { label:'Default',  bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'Write your message here...', bgTok:'background', brdTok:'input', phTok:'muted-foreground', cBg:'textarea/background', cBrd:'textarea/border', cPh:'textarea/placeholder' },
    { label:'Focus',    bg:'#ffffff', border:'#18181b', sw:2, ph:'Write your message here...', bgTok:'background', brdTok:'input', phTok:'muted-foreground', cBg:'textarea/background', cBrd:'textarea/border', cPh:'textarea/placeholder' },
    { label:'Filled',   bg:'#ffffff', border:'#e4e4e7', sw:1, ph:'Hello, World!',              bgTok:'background', brdTok:'input', phTok:'foreground', cBg:'textarea/background', cBrd:'textarea/border', cPh:'textarea/text' },
    { label:'Disabled', bg:'#f4f4f5', border:'#e4e4e7', sw:1, ph:'Disabled textarea', opacity:0.6, bgTok:'muted', brdTok:'input', phTok:'muted-foreground', cBg:'textarea/disabled-background', cBrd:'textarea/border', cPh:'textarea/placeholder' },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = 'State=' + s.label;
    comp.resize(S.inputW, S.textareH);
    setRadius(comp, S.radius);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'MIN';
    setPadding(comp, 12);
    comp.fills = [cvp(s.cBg, s.bgTok, s.bg)];
    comp.strokes = [cvp(s.cBrd, s.brdTok, s.border)];
    comp.strokeWeight = s.sw;
    comp.strokeAlign = 'INSIDE';
    if (s.opacity) comp.opacity = s.opacity;
    var ph = figma.createText();
    ph.characters = s.ph;
    ph.fontSize = S.fontSize;
    ph.fontName = fontName('Regular');
    ph.fills = [cvp(s.cPh, s.phTok, s.label === 'Filled' ? '#18181b' : '#a1a1aa')];
    comp.appendChild(ph);
    ph.layoutSizingHorizontal = 'FILL';
    ph.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Textarea';
  layoutSet(set);
  TEXTAREA_COMP_CACHE = {};
  allComps.forEach(function(c) { TEXTAREA_COMP_CACHE[c.name] = c; });
  return set;
}

function buildSelectPage(page) {
  var defs = [
    { label:'Closed',   text:'Select an option', textColor:'#a1a1aa', textTok:'muted-foreground', border:'#e4e4e7', brdTok:'input',  sw:1, cTxt:'select/placeholder', cBrd:'select/border' },
    { label:'Open',     text:'Option 2',          textColor:'#18181b', textTok:'foreground',        border:'#18181b', brdTok:'ring',   sw:2, cTxt:'select/text',        cBrd:'select/ring' },
    { label:'Disabled', text:'Select an option',  textColor:'#a1a1aa', textTok:'muted-foreground', border:'#e4e4e7', brdTok:'input',  sw:1, opacity:0.6, cTxt:'select/placeholder', cBrd:'select/border' },
  ];
  var allComps = [];
  defs.forEach(function(s) {
    var comp = figma.createComponent();
    comp.name = 'State=' + s.label;
    comp.resize(S.inputW, S.inputH);
    setRadius(comp, S.radius);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = 12; bindFloat(comp, 'paddingLeft', 'spacing/3');
    comp.paddingRight = 8; bindFloat(comp, 'paddingRight', 'spacing/2');
    setGap(comp, 4);
    comp.fills = [cvp('select/background', 'background', '#ffffff')];
    comp.strokes = [cvp(s.cBrd, s.brdTok, s.border)];
    comp.strokeWeight = s.sw;
    comp.strokeAlign = 'INSIDE';
    if (s.opacity) comp.opacity = s.opacity;
    var t = figma.createText();
    t.characters = s.text;
    t.fontSize = S.fontSize;
    t.fontName = fontName('Regular');
    t.fills = [cvp(s.cTxt, s.textTok, s.textColor)];
    comp.appendChild(t);
    t.layoutSizingHorizontal = 'FILL';
    t.layoutSizingVertical = 'HUG';
    addChevronAL(comp);
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Select';
  layoutSet(set);
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
    setRadius(comp, S.switchH / 2);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = s.checked ? 'MAX' : 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    setPadding(comp, 3);
    comp.fills = [cvp(s.checked ? 'switch/track-checked' : 'switch/track-unchecked', s.checked ? 'primary' : 'muted', s.checked ? '#18181b' : '#e4e4e7')];
    if (s.disabled) comp.opacity = 0.4;
    var tSz = S.switchH - 6;
    var thumb = figma.createFrame();
    thumb.name = 'thumb';
    thumb.resize(tSz, tSz);
    setRadius(thumb, tSz / 2);
    thumb.fills = [cvp('switch/thumb', 'background', '#ffffff')];
    comp.appendChild(thumb);
    thumb.layoutSizingHorizontal = 'FIXED';
    thumb.layoutSizingVertical = 'FIXED';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Switch';
  layoutSet(set);
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
    setRadius(comp, Math.min(S.radius, 4));
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'CENTER';
    comp.counterAxisAlignItems = 'CENTER';
    comp.fills = s.checked === true
      ? [cvp('checkbox/background-checked', 'primary', '#18181b')]
      : [cvp('checkbox/background-default', 'background', '#ffffff')];
    comp.strokes = s.checked
      ? [cvp('checkbox/border', 'primary', '#18181b')]
      : [cvp('checkbox/border', 'border', '#e4e4e7')];
    comp.strokeWeight = 1.5;
    comp.strokeAlign = 'INSIDE';
    if (s.disabled) comp.opacity = 0.4;
    if (s.checked === true) {
      addCheckmark(comp, 16, null, cvp('checkbox/foreground-checked', 'primary-foreground', '#ffffff'));
    } else if (s.checked === 'ind') {
      var dash = figma.createFrame();
      dash.name = 'dash';
      dash.resize(10, 2);
      setRadius(dash, 1);
      dash.fills = [cvp('checkbox/foreground-checked', 'primary-foreground', '#18181b')];
      comp.appendChild(dash);
      dash.layoutSizingHorizontal = 'FIXED';
      dash.layoutSizingVertical = 'FIXED';
    }
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Checkbox';
  layoutSet(set);
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
    setRadius(comp, 9);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'CENTER';
    comp.counterAxisAlignItems = 'CENTER';
    comp.fills = [cvp('radio/background', 'background', '#ffffff')];
    comp.strokes = s.checked
      ? [cvp('radio/border', 'primary', '#18181b')]
      : [cvp('radio/border', 'border', '#e4e4e7')];
    comp.strokeWeight = 1.5;
    comp.strokeAlign = 'INSIDE';
    if (s.disabled) comp.opacity = 0.4;
    if (s.checked) {
      var dot = figma.createFrame();
      dot.name = 'dot';
      dot.resize(8, 8);
    setRadius(dot, 4);
      dot.fills = [cvp('radio/indicator', 'primary', '#18181b')];
      comp.appendChild(dot);
      dot.layoutSizingHorizontal = 'FIXED';
      dot.layoutSizingVertical = 'FIXED';
    }
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Radio';
  layoutSet(set);
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
    setRadius(track, 3);
    track.fills = [cvp('slider/track-background', 'muted', '#e4e4e7')];
    track.x = 0; track.y = 7;
    comp.appendChild(track);
    var range = figma.createFrame();
    range.name = 'range';
    range.resize(Math.round(240 * s.value / 100), 6);
    setRadius(range, 3);
    range.fills = [cvp('slider/range', 'primary', '#18181b')];
    range.x = 0; range.y = 7;
    comp.appendChild(range);
    var thumb = figma.createFrame();
    thumb.name = 'thumb';
    thumb.resize(20, 20);
    setRadius(thumb, 10);
    thumb.fills = [cvp('slider/thumb', 'background', '#ffffff')];
    thumb.strokes = [cvp('slider/thumb-border', 'primary', '#18181b')];
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
  return set;
}

function buildBadgePage(page) {
  var variants = [
    { label:'Default',     bg:'#18181b', fg:'#fafafa', border:null,      bgTok:'primary',     fgTok:'primary-foreground',     cBg:'badge/default/background', cFg:'badge/default/foreground' },
    { label:'Secondary',   bg:'#f4f4f5', fg:'#18181b', border:null,      bgTok:'secondary',   fgTok:'secondary-foreground',   cBg:'badge/secondary/background', cFg:'badge/secondary/foreground' },
    { label:'Destructive', bg:'#ef4444', fg:'#fafafa', border:null,      bgTok:'destructive', fgTok:'destructive-foreground', cBg:'badge/destructive/background', cFg:'badge/destructive/foreground' },
    { label:'Outline',     bg:'#ffffff', fg:'#18181b', border:'#e4e4e7', bgTok:null,                           fgTok:'foreground',    brdTok:'border', cBg:null, cFg:'badge/outline/foreground', cBrd:'badge/outline/border' },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = 'Variant=' + v.label;
    comp.resize(40, S.badgeH);
    // 999 = full pill; clamp to half height so Figma doesn't error
    setRadius(comp, Math.min(S.badgeR, Math.floor(S.badgeH / 2)));
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'AUTO';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'CENTER';
    comp.counterAxisAlignItems = 'CENTER';
    setPaddingH(comp, 8);
    comp.fills = v.bgTok ? [cvp(v.cBg, v.bgTok, v.bg)] : [solidPaint(v.bg)];
    if (v.border) {
      comp.strokes = [cvp(v.cBrd || '', v.brdTok || '', v.border)];
      comp.strokeWeight = 1;
      comp.strokeAlign = 'INSIDE';
    }
    var t = figma.createText();
    t.characters = v.label;
    t.fontSize = Math.max(S.fontSize - 2, 10);
    t.fontName = fontName('Medium');
    t.fills = [cvp(v.cFg, v.fgTok, v.fg)];
    comp.appendChild(t);
    t.layoutSizingHorizontal = 'HUG';
    t.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Badge';
  layoutSet(set);
  return set;
}

function buildCardPage(page) {
  var variants = [
    { label:'Variant=Light', bg:'#ffffff', title:'#18181b', desc:'#71717a', border:'#e4e4e7', btnBg:'#18181b', btnFg:{r:1,g:1,b:1},     bgTok:'card', fgTok:'card-foreground', brdTok:'border', cBg:'card/background', cFg:'card/foreground', cBrd:'card/border' },
    { label:'Variant=Dark',  bg:'#18181b', title:'#ffffff', desc:'#71717a', border:'#27272a', btnBg:'#f4f4f5', btnFg:{r:0.1,g:0.1,b:0.1}, bgTok:'card', fgTok:'card-foreground', brdTok:'border', cBg:'card/background', cFg:'card/foreground', cBrd:'card/border' },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = v.label;
    comp.resize(320, 200);
    setRadius(comp, S.cardR);
    comp.clipsContent = true;
    comp.layoutMode = 'VERTICAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'MIN';
    setPadding(comp, 0);
    setGap(comp, 0);
    comp.fills = [cvp(v.cBg, v.bgTok, v.bg)];
    comp.strokes = [cvp(v.cBrd, v.brdTok, v.border)];
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
    setGap(header, 6);
    setPadding(header, 20);

    var ct = figma.createText();
    ct.characters = 'Card Title';
    setFontSize(ct, 16);
    ct.fontName = fontName('Semi Bold');
    ct.fills = [cvp(v.cFg, v.fgTok, v.title)];
    header.appendChild(ct);
    ct.layoutSizingHorizontal = 'HUG';
    ct.layoutSizingVertical = 'HUG';
    var cd = figma.createText();
    cd.characters = 'Card description goes here.';
    setFontSize(cd, 13);
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
    setPaddingH(footer, 20); setPaddingV(footer, 16);

    var btn = figma.createFrame();
    btn.name = 'action-btn';
    btn.resize(84, 32);
    setRadius(btn, 6);
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
    setFontSize(ft, 12);
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
  return set;
}

function buildAlertPage(page) {
  var variants = [
    { label:'Variant=Default',     bg:'#ffffff', border:'#e4e4e7', titleColor:'#18181b', descColor:'#71717a', title:'Heads up!', desc:'You can add components using the CLI.', bgTok:'background',     brdTok:'border',     ttlTok:'foreground',     dscTok:'foreground',     icon:'info',  cBg:'alert/default/background', cBrd:'alert/default/border', cTtl:'alert/default/foreground', cDsc:'alert/default/foreground' },
    { label:'Variant=Destructive', bg:'#ffffff', border:'#ef4444', titleColor:'#ef4444', descColor:'#b91c1c', title:'Error',     desc:'Your session has expired. Please log in.', bgTok:'background', brdTok:'destructive', ttlTok:'destructive', dscTok:'destructive', icon:'error', cBg:'alert/destructive/background', cBrd:'alert/destructive/border', cTtl:'alert/destructive/foreground', cDsc:'alert/destructive/foreground' },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = v.label;
    comp.resize(480, 72);
    setRadius(comp, S.alertR);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    setPaddingH(comp, 16); setPaddingV(comp, 12);
    setGap(comp, 12);
    comp.fills = [cvp(v.cBg, v.bgTok, v.bg)];
    comp.strokes = [cvp(v.cBrd, v.brdTok, v.border)];
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
    setGap(textGroup, 4);
    setPadding(textGroup, 0);

    var aTitle = figma.createText();
    aTitle.characters = v.title;
    aTitle.fontSize = S.fontSize + 1;
    aTitle.fontName = fontName('Semi Bold');
    aTitle.fills = [cvp(v.cTtl, v.ttlTok, v.titleColor)];
    textGroup.appendChild(aTitle);
    aTitle.layoutSizingHorizontal = 'HUG';
    aTitle.layoutSizingVertical = 'HUG';
    var aDesc = figma.createText();
    aDesc.characters = v.desc;
    setFontSize(aDesc, 13);
    aDesc.fontName = fontName('Regular');
    aDesc.fills = [cvp(v.cDsc, v.dscTok, v.descColor)];
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
  return set;
}

function buildToastPage(page) {
  var variants = [
    { label:'Variant=Default',     bg:'#ffffff', border:'#e4e4e7', title:'Scheduled: Catch up',         desc:'Friday, Feb 10, 2023 at 5:57 PM',     bgTok:'background',             brdTok:'border', iconSemantic:'success', iconColor:'#18181b', cBg:'toast/background', cBrd:'toast/border' },
    { label:'Variant=Destructive', bg:'#ffffff', border:'#ef4444', title:'Error: Something went wrong',  desc:'Please try again or contact support.', bgTok:'background', brdTok:'border', iconSemantic:'error',   iconColor:'#ef4444', cBg:'toast/destructive/background', cBrd:'toast/border' },
  ];
  var allComps = [];
  variants.forEach(function(v) {
    var comp = figma.createComponent();
    comp.name = v.label;
    comp.resize(340, 64);
    setRadius(comp, S.alertR);
    comp.clipsContent = true;
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisSizingMode = 'FIXED';
    comp.counterAxisSizingMode = 'FIXED';
    comp.primaryAxisAlignItems = 'MIN';
    comp.counterAxisAlignItems = 'CENTER';
    setPaddingH(comp, 12); setPaddingV(comp, 0);
    setGap(comp, 8);
    comp.fills = [cvp(v.cBg, v.bgTok, v.bg)];
    comp.strokes = [cvp(v.cBrd, v.brdTok, v.border)];
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
    setGap(textGroup, 2);
    setPadding(textGroup, 0);

    var ttitle = figma.createText();
    ttitle.characters = v.title;
    setFontSize(ttitle, 13);
    ttitle.fontName = fontName('Semi Bold');
    ttitle.fills = [cvp('toast/foreground', 'foreground', '#18181b')];
    textGroup.appendChild(ttitle);
    ttitle.layoutSizingHorizontal = 'HUG';
    ttitle.layoutSizingVertical = 'HUG';
    var tdesc = figma.createText();
    tdesc.characters = v.desc;
    setFontSize(tdesc, 12);
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
    setRadius(btn, 5);
    btn.layoutMode = 'HORIZONTAL';
    btn.primaryAxisSizingMode = 'FIXED';
    btn.counterAxisSizingMode = 'FIXED';
    btn.primaryAxisAlignItems = 'CENTER';
    btn.counterAxisAlignItems = 'CENTER';
    btn.fills = [cvp('toast/action-background', 'secondary', '#f4f4f5')];
    comp.appendChild(btn);
    btn.layoutSizingHorizontal = 'FIXED';
    btn.layoutSizingVertical = 'FIXED';
    var tu = figma.createText();
    tu.characters = 'Undo';
    setFontSize(tu, 12);
    tu.fontName = fontName('Medium');
    tu.fills = [cvp('toast/action-foreground', 'secondary-foreground', '#18181b')];
    btn.appendChild(tu);
    tu.layoutSizingHorizontal = 'HUG';
    tu.layoutSizingVertical = 'HUG';
    allComps.push(comp);
  });
  var set = figma.combineAsVariants(allComps, page);
  set.name = 'Toast';
  layoutSet(set);
  return set;
}

function buildDialogPage(page) {
  var comp = figma.createComponent();
  comp.name = 'Variant=Default';
  comp.resize(480, 260);
  setRadius(comp, S.cardR);
  comp.clipsContent = true;
  comp.layoutMode = 'VERTICAL';
  comp.primaryAxisSizingMode = 'FIXED';
  comp.counterAxisSizingMode = 'FIXED';
  comp.primaryAxisAlignItems = 'MIN';
  comp.counterAxisAlignItems = 'MIN';
  setPadding(comp, 24);
  setGap(comp, 16);
  comp.fills = [cvp('dialog/background', 'background', '#ffffff')];
  comp.strokes = [cvp('dialog/border', 'border', '#e4e4e7')];
  comp.strokeWeight = 1;
  comp.strokeAlign = 'INSIDE';
  comp.effects = [{ type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.2}, offset:{x:0,y:8}, radius:40, spread:0, visible:true, blendMode:'NORMAL' }];

  var dtitle = figma.createText();
  dtitle.characters = 'Edit Profile';
  setFontSize(dtitle, 18);
  dtitle.fontName = fontName('Semi Bold');
  dtitle.fills = [cvp('dialog/foreground', 'foreground', '#18181b')];
  comp.appendChild(dtitle);
  dtitle.layoutSizingHorizontal = 'HUG';
  dtitle.layoutSizingVertical = 'HUG';

  var ddesc = figma.createText();
  ddesc.characters = 'Make changes to your profile here.';
  setFontSize(ddesc, 13);
  ddesc.fontName = fontName('Regular');
  ddesc.fills = [solidPaint('#71717a')];
  comp.appendChild(ddesc);
  ddesc.layoutSizingHorizontal = 'HUG';
  ddesc.layoutSizingVertical = 'HUG';

  var inp = figma.createFrame();
  inp.name = 'field';
  inp.resize(432, S.inputH);
  setRadius(inp, S.radius);
  inp.layoutMode = 'HORIZONTAL';
  inp.primaryAxisSizingMode = 'FIXED';
  inp.counterAxisSizingMode = 'FIXED';
  inp.primaryAxisAlignItems = 'MIN';
  inp.counterAxisAlignItems = 'CENTER';
  setPaddingH(inp, 12);
  inp.fills = [solidPaint('#ffffff')];
  inp.strokes = [solidPaint('#e4e4e7')];
  inp.strokeWeight = 1;
  inp.strokeAlign = 'INSIDE';
  comp.appendChild(inp);
  inp.layoutSizingHorizontal = 'FILL';
  inp.layoutSizingVertical = 'FIXED';

  var iph = figma.createText();
  iph.characters = 'Pedro Duarte';
  setFontSize(iph, 13);
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
  setGap(actions, 8);
  setPadding(actions, 0);
  comp.appendChild(actions);
  actions.layoutSizingHorizontal = 'FILL';
  actions.layoutSizingVertical = 'HUG';

  var cancel = figma.createFrame();
  cancel.name = 'cancel-btn';
  cancel.resize(90, S.btnH);
  setRadius(cancel, S.radius);
  cancel.layoutMode = 'HORIZONTAL';
  cancel.primaryAxisSizingMode = 'FIXED';
  cancel.counterAxisSizingMode = 'FIXED';
  cancel.primaryAxisAlignItems = 'CENTER';
  cancel.counterAxisAlignItems = 'CENTER';
  cancel.fills = [solidPaint('#f4f4f5')];
  actions.appendChild(cancel);

  var ct2 = figma.createText();
  ct2.characters = 'Cancel';
  setFontSize(ct2, 13);
  ct2.fontName = fontName('Medium');
  ct2.fills = [solidPaint('#18181b')];
  cancel.appendChild(ct2);
  ct2.layoutSizingHorizontal = 'HUG';
  ct2.layoutSizingVertical = 'HUG';

  var save = figma.createFrame();
  save.name = 'save-btn';
  save.resize(90, S.btnH);
  setRadius(save, S.radius);
  save.layoutMode = 'HORIZONTAL';
  save.primaryAxisSizingMode = 'FIXED';
  save.counterAxisSizingMode = 'FIXED';
  save.primaryAxisAlignItems = 'CENTER';
  save.counterAxisAlignItems = 'CENTER';
  save.fills = [vp('primary', '#18181b')];
  actions.appendChild(save);

  var st2 = figma.createText();
  st2.characters = 'Save';
  setFontSize(st2, 13);
  st2.fontName = fontName('Medium');
  st2.fills = [{ type:'SOLID', color:{r:1,g:1,b:1} }];
  save.appendChild(st2);
  st2.layoutSizingHorizontal = 'HUG';
  st2.layoutSizingVertical = 'HUG';

  var set = figma.combineAsVariants([comp], page);
  set.name = 'Dialog';
  layoutSet(set);
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
  var swatchNames = ACTIVE_COLORS && ACTIVE_COLORS.length > 0 ? ACTIVE_COLORS : Object.keys(TW_COLORS);
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

async function buildCanvasComponents(selectedComponents, options, fontFamily) {
  CANVAS_FONT = fontFamily || 'Inter';
  S = STYLE_PRESETS[options.style] || STYLE_PRESETS.vega;
  await buildVarCache(); // populate VAR_CACHE so vp() can bind variables

  // ── Icon library: build page first so ICON_CACHE is ready for all builders ─
  ICON_CACHE      = {};
  ACTIVE_ICON_LIB = options.iconLibrary || '';
  if (ACTIVE_ICON_LIB === 'lucide' || ACTIVE_ICON_LIB === 'iconnoir') {
    var iconsData    = RUNTIME_ICONS;
    var libLabel     = ACTIVE_ICON_LIB === 'lucide' ? 'Lucide' : 'Iconoir';
    var iconPageName = 'Icons \u2014 ' + libLabel;
    var iconPg       = getOrCreatePage(iconPageName);
    clearPage(iconPg);
    await figma.setCurrentPageAsync(iconPg);
    buildIconPage(iconPg, libLabel, iconsData); // also populates ICON_CACHE
  }

  // Clear stale caches from previous runs
  BUTTON_COMP_CACHE = {};
  LABEL_COMP_CACHE = {};
  INPUT_COMP_CACHE = {};
  TEXTAREA_COMP_CACHE = {};
  SELECT_COMP_CACHE = {};
  SWITCH_COMP_CACHE = {};
  CHECKBOX_COMP_CACHE = {};
  RADIO_COMP_CACHE = {};

  // buttongroup depends on button being built first
  if (selectedComponents.indexOf('buttongroup') !== -1) {
    if (selectedComponents.indexOf('button') === -1) {
      selectedComponents = ['button'].concat(selectedComponents);
    }
    // Ensure button comes before buttongroup
    selectedComponents = selectedComponents.filter(function(k) { return k !== 'buttongroup'; });
    var bgIdx = selectedComponents.indexOf('button');
    selectedComponents.splice(bgIdx + 1, 0, 'buttongroup');
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
    await figma.setCurrentPageAsync(singlePage);
    var singleSets = [];
    selectedComponents.forEach(function(key) {
      if (!builders[key]) return;
      var set = builders[key](singlePage);
      if (set) singleSets.push(set);
    });
    placeComponentSets(singlePage, singleSets);
    return;
  }

  if (pageMode === 'grouped') {
    var groupNames = Object.keys(COMPONENT_GROUPS);
    for (var gi = 0; gi < groupNames.length; gi++) {
      var groupName = groupNames[gi];
      var groupKeys = COMPONENT_GROUPS[groupName].filter(function(k) {
        return selectedComponents.indexOf(k) !== -1 && builders[k];
      });
      if (!groupKeys.length) continue;
      var gPage = getOrCreatePage(groupName);
      clearPage(gPage);
      await figma.setCurrentPageAsync(gPage);
      var groupSets = [];
      groupKeys.forEach(function(key) {
        var set = builders[key](gPage);
        if (set) groupSets.push(set);
      });
      placeComponentSets(gPage, groupSets);
    }
    return;
  }

  // per-component (default): one page per component
  for (var ci = 0; ci < selectedComponents.length; ci++) {
    var key = selectedComponents[ci];
    var def = COMPONENT_DEFINITIONS[key];
    if (!def || !builders[key]) continue;
    var pageName = def.name;
    if (pagesBuilt[pageName]) continue;
    var pg = getOrCreatePage(pageName);
    clearPage(pg);
    await figma.setCurrentPageAsync(pg);
    var set = builders[key](pg);
    if (set) placeComponentSets(pg, [set]);
    pagesBuilt[pageName] = true;
  }

}

// ─── Message handler ──────────────────────────────────────────────────────────

figma.ui.onmessage = async function(msg) {
  if (msg.type === 'generate') {
    var opts = msg.options;
    try {
      ACTIVE_COLORS = opts.selectedColors || Object.keys(TW_COLORS);
      var colorCount = ACTIVE_COLORS.length * 11 + 2;
      var opacityCount = opts.opacityVariants && opts.opacityVariants.length > 0
        ? ACTIVE_COLORS.length * 11 * opts.opacityVariants.length : 0;
      sendProgress('Creating color primitives… (' + (colorCount + opacityCount) + ' variables)', 5);
      var primResult = await createPrimitivesCollection(opts.selectedColors, opts.opacityVariants);

      // Update SEMANTIC_TOKENS global so component collection can use it
      var roles = opts.semanticRoles || DEFAULT_ROLES;
      var tokenStructure = opts.tokenStructure || 'classic';
      USE_ALE_MAP = tokenStructure === 'improved';
      SEMANTIC_TOKENS = tokenStructure === 'improved'
        ? getImprovedSemanticTokens(roles)
        : getSemanticTokens(roles);

      sendProgress('Creating sizing tokens…', 20);
      await createSizingCollection({
        includeRadius:      opts.includeRadius,
        includeSpacing:     opts.includeSpacing,
        includeFontSizes:   opts.includeFontSizes,
        includeBorderWidth: opts.includeBorderWidth,
        includeOpacityVars: opts.includeOpacityVars,
      });

      var themeResult = { variableMap: {} };
      await removeExistingCollection('Themes');
      await removeExistingCollection('Ale/Themes');
      await removeExistingCollection('shadcn / Components'); // clean up from previous runs
      if (opts.includeSemanticTokens !== false) {
        sendProgress('Creating semantic themes (Light + Dark)…', 35);
        themeResult = await createThemeCollection(primResult.variableMap, roles, tokenStructure);
      }

      if (opts.components && opts.components.length > 0 && tokenStructure === 'classic' && opts.includeSemanticTokens !== false) {
        sendProgress('Creating component token variables…', 60);
        await createComponentCollection(opts.components, themeResult.variableMap, primResult.variableMap);
      }

      // Shadows & text styles
      if (opts.includeShadows) {
        sendProgress('Creating shadow styles…', 62);
        await createShadowStyles();
      }
      if (opts.includeTextStyles) {
        sendProgress('Creating text styles…', 65);
        await createTextStyles(opts.fontFamily);
      }

      // Accept icon data from UI (fetched from CDN)
      if (opts.iconData && typeof opts.iconData === 'object') {
        RUNTIME_ICONS = opts.iconData;
      }

      if (opts.createCanvas) {
        var fontFamily = opts.fontFamily || 'Inter';
        sendProgress('Loading fonts…', 70);

        // Always load Inter Regular — Figma's default font for new text nodes
        LOADED_STYLES = {};
        try {
          await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
          LOADED_STYLES['Inter/Regular'] = true;
        } catch(e) { /* Inter not available */ }

        // Load each style of the selected font
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
        await buildCanvasComponents(canvasKeys, opts, fontFamily);

        // Navigate to the first built page
        if (figma.root.children.length > 0) {
          await figma.setCurrentPageAsync(figma.root.children[0]);
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
    try {
      // Remove all variable collections
      (await figma.variables.getLocalVariableCollectionsAsync()).forEach(function(col) { col.remove(); });
      // Remove all styles
      (await figma.getLocalPaintStylesAsync()).forEach(function(s) { s.remove(); });
      (await figma.getLocalEffectStylesAsync()).forEach(function(s) { s.remove(); });
      (await figma.getLocalTextStylesAsync()).forEach(function(s) { s.remove(); });
      // Create fresh page and switch to it
      var freshPage = figma.createPage();
      freshPage.name = 'Page 1';
      await figma.setCurrentPageAsync(freshPage);
      // Remove all other pages
      figma.root.children.slice().forEach(function(page) {
        if (page.id !== freshPage.id) page.remove();
      });
      figma.ui.postMessage({ type: 'cleared' });
    } catch (err) {
      figma.ui.postMessage({ type: 'error', message: 'Clear failed: ' + (err.message || String(err)) });
    }
  }
};
