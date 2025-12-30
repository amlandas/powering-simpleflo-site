export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("simpleflo-theme");var n=t||"night";var r=document.documentElement;r.dataset.theme=n;r.classList.toggle("dark",n==="dark"||n==="night");}catch(e){}})();`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
