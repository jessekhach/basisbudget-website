export function DarkModeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(e){e.matches?document.documentElement.classList.add('dark'):document.documentElement.classList.remove('dark')})}catch(e){}})()`,
      }}
    />
  );
}
