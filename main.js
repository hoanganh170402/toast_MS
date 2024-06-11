function toast({title = '',message = '',type = 'info',duration = 1000})
{
      const main = document.getElementById('toast');
      if(main)
      {
            const toast = document.createElement('div')
            
            // Auto remove Toast 
            const autoRemoveToast = setTimeout(() => {
                  main.removeChild(toast)
            }, duration + 300);

            toast.onclick = (e) => {
                  if(e.target.closest('.toast__close'))
                  {
                        main.removeChild(toast)
                        clearTimeout(autoRemoveToast)
                  }
            }

            const icons = {
                  success: 'fa-solid fa-circle-check',
                  error: 'fa-solid fa-circle-xmark',
                  info: 'fa-solid fa-circle-info',
                  warning: 'fa-solid fa-circle-exclamation'
            }
            const icon = icons[type]
            const delay = (duration /1000).toFixed(2)
            const timeAnimate = (300 / 1000).toFixed(2)

            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInLeft ${timeAnimate}s ease, slideOutLeft 0.3s ease ${delay}s forwards`

            toast.innerHTML = /*html */ `
                  <div class="toast__icon">
                        <i class="${icon}"></i>
                  </div>
                  <div class="toast__body">
                        <div class="toast__title">${title}</div>
                        <div class="toast__msg">
                              ${message}
                        </div>
                  </div>
                  <div class="toast__close">
                        <i class="fa-solid fa-xmark"></i>
                  </div>
            `;
            main.appendChild(toast);
            
      }
}

function showSuccessToast() 
{
      toast({
            title:'Success',
            message:'Success to connect website',
            type:'success',
            duration:2000
      })
}

function showDangerToast() 
{
      toast({
            title:'Error',
            message:'Error to connect website',
            type:'error',
            duration:2000
      })
}

function showInfoToast() 
{
      toast({
            title:'Info',
            message:'Info website',
            type:'info',
            duration:2000
      })
}

function showWarningToast() 
{
      toast({
            title:'Warning',
            message:'Warning!!!',
            type:'warning',
            duration:2000
      })
}
