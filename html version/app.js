// Lightweight app script for the static HTML prototypes
(function(){
  function qs(sel, root=document){ return root.querySelector(sel) }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)) }
  function save(key, val){ sessionStorage.setItem(key, JSON.stringify(val)) }
  function load(key){ try{ const v = sessionStorage.getItem(key); return v? JSON.parse(v): null }catch(e){return null} }

  document.addEventListener('DOMContentLoaded', ()=>{
    const page = location.pathname.split('/').pop().toLowerCase();

    // Helper to set a temporary toast (non-blocking)
    function toast(msg){ console.log('[app] '+msg) }

    // --- Name New Preset: capture input before navigating ---
    if(page === 'name new preset.html'){
      const input = qs('#preset-name');
      const next = qs('a[href$="preset color.html"]');
      if(next && input) next.addEventListener('click', ()=>{
        save('newPresetName', input.value || null);
        toast('Saved preset name')
      })
    }

    // --- Preset Color: pick quick swatches or manual HEX ---
    if(page === 'preset color.html'){
      const swatches = qsa('.size-10');
      const hexInput = qs('input[placeholder*="#HEX"]');
      function setPreviewColor(c){ const preview = qs('.w-16.h-16.rounded-full') || qs('.h-12.w-12.rounded-xl'); if(preview) preview.style.backgroundColor = c; save('newPresetColor', c); }
      swatches.forEach(s=> s.addEventListener('click', ()=>{
        const bg = getComputedStyle(s).backgroundColor;
        setPreviewColor(bg);
        toast('Preset color selected')
      }));
      if(hexInput){ hexInput.addEventListener('change', ()=>{ setPreviewColor(hexInput.value); toast('Manual color saved') }) }
    }

    // --- Choose Schedule Action: store which action was chosen ---
    if(page === 'chose schedule action.html'){
      const colorLink = qs('a[href$="select schedule color.html"]');
      const effectLink = qs('a[href$="select schedule effect.html"]');
      if(colorLink) colorLink.addEventListener('click', ()=> save('scheduleAction','set_color'));
      if(effectLink) effectLink.addEventListener('click', ()=> save('scheduleAction','apply_effect'));
      // Save Schedule anchor -> collect and persist schedule
      const saveAnchor = Array.from(document.querySelectorAll('a[href$="main.html"]')).find(a=>/save schedule/i.test(a.textContent));
      if(saveAnchor) saveAnchor.addEventListener('click', ()=>{
        const schedule = {
          time: load('scheduleTime')||null,
          action: load('scheduleAction')||null,
          color: load('scheduleColor')||null,
          effect: load('scheduleEffect')||null,
        };
        const existing = JSON.parse(localStorage.getItem('schedules')||'[]');
        existing.push(schedule);
        localStorage.setItem('schedules', JSON.stringify(existing));
        toast('Schedule saved');
      })
    }

    // --- Select Schedule Effect: allow selecting an effect card ---
    if(page === 'select schedule effect.html'){
      const cards = qsa('.group.relative.cursor-pointer, .group.relative');
      cards.forEach(c=>{
        c.style.cursor = 'pointer';
        c.addEventListener('click', ()=>{
          // remove previous selection
          cards.forEach(x=> x.classList.remove('selected-effect'));
          c.classList.add('selected-effect');
          // find name
          const nameEl = c.querySelector('span.font-semibold, span.font-bold, span.text-base') || c.querySelector('span');
          const name = nameEl? nameEl.textContent.trim(): null;
          save('scheduleEffect', name);
        })
      })
    }

    // --- Select Schedule Color: pick quick swatches or manual input ---
    if(page === 'select schedule color.html'){
      const swatches = qsa('button.w-12, .size-10, button.snap-start');
      const preview = qs('.w-32.h-32');
      const manual = qs('input[placeholder*="HEX"]');
      swatches.forEach(s=> s.addEventListener('click', ()=>{
        const bg = getComputedStyle(s).backgroundColor || s.style.backgroundColor;
        if(preview) preview.style.backgroundColor = bg;
        save('scheduleColor', bg);
      }));
      if(manual) manual.addEventListener('change', ()=>{ if(preview) preview.style.backgroundColor = manual.value; save('scheduleColor', manual.value) })
      // Confirm button already navigates to time page; keep selection
    }

    // --- Select Schedule Time: simple time picker storing value ---
    if(page === 'set schedule time.html'){
      const inputs = qsa('input[type="time"], input[type="text"], input[type="datetime-local"]');
      inputs.forEach(i=> i.addEventListener('change', ()=> save('scheduleTime', i.value)));
      const confirm = Array.from(document.querySelectorAll('a[href$="main.html"]')).find(a=>/save schedule|confirm/i.test(a.textContent));
      if(confirm) confirm.addEventListener('click', ()=> toast('Time saved'));
    }

    // --- Main page: load summaries and wire power button ---
    if(page === 'main.html'){
      // show number of saved schedules in console
      const schedules = JSON.parse(localStorage.getItem('schedules')||'[]');
      toast('Loaded '+schedules.length+' saved schedule(s)');
      // power toggle: find span with power icon text
      const icons = qsa('.material-symbols-outlined');
      const powerIcon = icons.find(sp=> sp.textContent && sp.textContent.trim().toLowerCase().includes('power_settings_new'));
      if(powerIcon){ const btn = powerIcon.closest('button'); if(btn){ btn.addEventListener('click', ()=>{
        const on = load('powerOn');
        save('powerOn', !on);
        toast('Power toggled to '+(!on));
      })}}
    }

  })
})();
