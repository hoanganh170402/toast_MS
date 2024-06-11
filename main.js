function toast({title = '', message = '', type = 'warning', duration = 3000}) {
      const main = document.getElementById('toast');
      if (main)
      {
            const toast = document.createElement('div')
            const icons = {
                  success: 'fa-solid fa-circle-check',
                  warning: 'fa-solid fa-circle-exclamation',
                  error: 'fa-solid fa-circle-xmark',
                  info: 'fa-solid fa-circle-info'
            }
            const icon = icons[type]
            const time = (duration / 1000).toFixed(2)
            const timeAnimation = (300 / 1000).toFixed(2)

            toast.style.animation = `slideInLeft ${timeAnimation}s ease, slideOutLeft 0.3s ease ${time}s forwards`
            toast.classList.add('toast', `toast--${type}`)
            toast.innerHTML = /*html */`
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
            `
            main.appendChild(toast)
            const autoRemoveToast = setTimeout(() => {
                  main.removeChild(toast)
            }, duration + 300);

            toast.onclick = (e) => {
                  if (e.target.closest('.toast__close'))
                  {
                        main.removeChild(toast)
                        clearTimeout(autoRemoveToast)
                  }
            }
      }
} 

function showSuccessToast()
{
      toast({
            title:'Success',
            message:'Success to connect website',
            type:'success',
            duration:2500
      })
}

function showErrorToast()
{
      toast({
            title:'Error',
            message:'Error to connect website',
            type:'error',
            duration:2500
      })
}

function showInfoToast()
{
      toast({
            title:'Info',
            message:'Info website',
            type:'info',
            duration:2500
      })
}

function showWarningToast()
{
      toast({
            title:'warning',
            message:'waring !!!',
            type:'warning',
            duration:2500
      })
}
