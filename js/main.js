const elDemoModalOpen=document.querySelector('.site-banner-button')
const elDemoModal=document.querySelector('.modal-menu')
const elDemoModalClose=document.querySelector('.modal-menu-button')

elDemoModalOpen.addEventListener('click', function(){
  elDemoModal.classList.add('modal-menu-block')
})

elDemoModalClose.addEventListener('click', function(){
  elDemoModal.classList.remove('modal-menu-block')
})
