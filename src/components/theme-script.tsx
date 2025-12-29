export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("simpleflo-theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var n=t|| (d?"dark":"daylight");var r=document.documentElement;r.dataset.theme=n;r.classList.toggle("dark",n==="dark"||n==="night");}catch(e){}})();`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
