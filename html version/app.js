// Lightweight app script for the static HTML prototypes
(function(){
  function qs(sel, root=document){ return root.querySelector(sel) }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)) }
  function save(key, val){ sessionStorage.setItem(key, JSON.stringify(val)) }
  function load(key){ try{ const v = sessionStorage.getItem(key); return v? JSON.parse(v): null }catch(e){return null} }

  // ======== TOAST SYSTEM ========
  function createToastContainer(){
    let container = qs('#toast-container');
    if(!container){
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;max-width:300px;pointer-events:none;';
      document.body.appendChild(container);
    }
    return container;
  }

  window.showToast = function(msg, type='info', duration=3000){
    const container = createToastContainer();
    const toast = document.createElement('div');
    const bgColor = type==='error'?'#ef4444':type==='success'?'#10b981':'#3b82f6';
    toast.style.cssText = `
      background: ${bgColor};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
      pointer-events: auto;
      cursor: pointer;
    `;
    toast.textContent = msg;
    toast.addEventListener('click', ()=> toast.remove());
    container.appendChild(toast);
    if(duration) setTimeout(()=> toast.remove(), duration);
  };

  // Add animation keyframes
  if(!qs('style#toast-animations')){
    const style = document.createElement('style');
    style.id = 'toast-animations';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  // ======== COLOR & BRIGHTNESS MANAGEMENT ========
  window.colorState = {
    red: 120,
    green: 40,
    blue: 225,
    brightness: 75
  };

  // Send color update to backend (placeholder)
  window.sendColorUpdate = function(payload){
    window.showToast('Color updated', 'success', 2000);
    // TODO: Replace with actual backend call
    // fetch('/api/led/color', { method: 'POST', body: JSON.stringify(payload) })
    save('currentColor', payload);
  };

  // Update central color preview with brightness scaling
  window.updateColorPreview = function(){
    const {red, green, blue, brightness} = window.colorState;
    const scale = brightness / 100;
    const r = Math.round(red * scale);
    const g = Math.round(green * scale);
    const b = Math.round(blue * scale);
    const rgbStr = `rgb(${r}, ${g}, ${b})`;
    
    const preview = qs('.size-64 .absolute.inset-2');
    if(preview) preview.style.backgroundColor = rgbStr;
    
    sendColorUpdate({red, green, blue, brightness});
  };

  // Adjust brightness
  window.adjustBrightness = function(delta){
    let newBrightness = window.colorState.brightness + delta;
    newBrightness = Math.max(0, Math.min(100, newBrightness));
    window.colorState.brightness = newBrightness;
    
    const displayEl = qs('.text-5xl.font-bold');
    if(displayEl) displayEl.textContent = newBrightness + '%';
    
    const barEl = qs('.absolute.bottom-0.left-0.w-full.bg-white.h-\\[75\\%\\]');
    if(barEl) barEl.style.height = newBrightness + '%';
    
    updateColorPreview();
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    const page = location.pathname.split('/').pop().toLowerCase();

    // Helper reference
    const toast = window.showToast;

    // --- Name New Preset: capture input before navigating ---
    if(page === 'name new preset.html'){
      const input = qs('#preset-name');
      const next = qs('a[href$="preset color.html"]');
      if(next && input) next.addEventListener('click', (e)=>{
        const name = input.value.trim();
        if(!name){
          e.preventDefault();
          toast('Please enter a preset name', 'error');
          return;
        }
        save('newPresetName', name);
        toast('Preset name saved', 'success');
      })
    }

    // --- Preset Color: pick quick swatches or manual HEX ---
    if(page === 'preset color.html'){
      const swatches = qsa('.size-10');
      const hexInput = qs('input[placeholder*="#HEX"]');
      let colorSelected = false;
      function setPreviewColor(c){ const preview = qs('.w-16.h-16.rounded-full') || qs('.h-12.w-12.rounded-xl'); if(preview) preview.style.backgroundColor = c; save('newPresetColor', c); colorSelected = true; }
      swatches.forEach(s=> s.addEventListener('click', ()=>{
        const bg = getComputedStyle(s).backgroundColor;
        setPreviewColor(bg);
        toast('Color selected', 'success');
      }));
      if(hexInput){ hexInput.addEventListener('change', ()=>{ setPreviewColor(hexInput.value); toast('Custom color saved', 'success') }) }
      // Validate before leaving
      const cancelBtn = qs('a[href$="preset_management.html"]');
      const confirmBtns = qsa('a[href*="save"], button:has-text("Save"), a[href$="main.html"]');
      if(cancelBtn) cancelBtn.addEventListener('click', (e)=>{
        if(!colorSelected){
          e.preventDefault();
          toast('Please select a color', 'error');
        }
      })
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
      
      // Wire RGB sliders
      const sliders = qsa('input[type="range"]');
      const valueDisplays = qsa('.text-xs.font-mono.text-gray-300');
      // Initialize slider positions and display numbers from colorState
      sliders.forEach((slider, idx)=>{
        const colors = ['red', 'green', 'blue'];
        const key = colors[idx];
        if(key && typeof window.colorState[key] === 'number'){
          slider.value = window.colorState[key];
          if(valueDisplays[idx]) valueDisplays[idx].textContent = window.colorState[key];
        }

        slider.addEventListener('input', ()=>{
          const val = parseInt(slider.value);
          const colors = ['red', 'green', 'blue'];
          const colorKey = colors[idx];
          if(colorKey) window.colorState[colorKey] = val;

          if(valueDisplays[idx]) valueDisplays[idx].textContent = val;

          updateColorPreview();
        });
        // update the visual knob position for this slider
        function updateKnob(){
          try{
            const parent = slider.closest('.relative');
            if(!parent) return;
            const knob = parent.querySelector('.pointer-events-none');
            if(!knob) return;
            const min = parseInt(slider.min||0);
            const max = parseInt(slider.max||255);
            const pct = ((parseInt(slider.value)-min)/(max-min))*100;
            knob.style.left = pct+'%';
            knob.style.transform = 'translate(-50%, -50%)';
          }catch(e){/* ignore */}
        }
        updateKnob();
        slider.addEventListener('input', updateKnob);
      });
      
      // Wire brightness +/- buttons
      const brightnessButtons = qsa('button.size-8');
      if(brightnessButtons.length >= 2){
        brightnessButtons[0].addEventListener('click', ()=> adjustBrightness(5));
        brightnessButtons[1].addEventListener('click', ()=> adjustBrightness(-5));
      }
      
      // Wire preset selector circles
      const presets = qsa('.snap-center.shrink-0.flex.flex-col');
      presets.forEach(preset=>{
        const colorEl = preset.querySelector('.size-14');
        if(colorEl && !colorEl.querySelector('span')) {
          preset.style.cursor = 'pointer';
          preset.addEventListener('click', ()=>{
            const bgColor = getComputedStyle(colorEl).backgroundColor;
            // Parse rgb(r,g,b) -> extract values
            const match = bgColor.match(/\d+/g);
            if(match && match.length >= 3){
              window.colorState.red = parseInt(match[0]);
              window.colorState.green = parseInt(match[1]);
              window.colorState.blue = parseInt(match[2]);
              // update sliders and displays if present
              const colors = ['red','green','blue'];
              sliders.forEach((s, i)=>{
                const k = colors[i];
                if(k && typeof window.colorState[k] === 'number'){
                  s.value = window.colorState[k];
                  if(valueDisplays[i]) valueDisplays[i].textContent = window.colorState[k];
                }
              });
              updateColorPreview();
              toast('Preset loaded');
            }
          });
        }
      });
      
      // power toggle: find span with power icon text
      const icons = qsa('.material-symbols-outlined');
      const powerIcon = icons.find(sp=> sp.textContent && sp.textContent.trim().toLowerCase().includes('power_settings_new'));
      if(powerIcon){ const btn = powerIcon.closest('button'); if(btn){ btn.addEventListener('click', ()=>{
        const on = load('powerOn');
        save('powerOn', !on);
        toast('Power toggled to '+(!on));
      })}}
      
      // Initialize brightness display then color preview
      const displayEl = qs('.text-5xl.font-bold');
      if(displayEl) displayEl.textContent = window.colorState.brightness + '%';
      updateColorPreview();
    }

  })
})();
