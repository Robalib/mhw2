const new_images = [
  'img/cropped_t-shirt_change.webp',
  'img/bikini_change.webp',
  'img/tank_change.webp',
  'img/socks_change.webp',
  'img/swim_short_change.webp',
  'img/hat_change.webp']

  const original_images = [
    'img/cropped_t-shirt.webp',
    'img/bikini.webp',
    'img/tank_top.webp',
    'img/socks.webp',
    'img/swim_shorts.webp',
    'img/hat.webp']

function changeImg(event)
{
  const image = event.currentTarget;
  const index = parseInt(image.dataset.index);
  image.src = new_images[index];
  image.addEventListener('mouseout',originalImg);
}

function originalImg(event)
{
  const image = event.currentTarget;
  const index = parseInt(image.dataset.index);
  image.src = original_images[index];
}

const images = document.querySelectorAll('#container img');
for (const image of images)
{
  image.addEventListener('mouseover', changeImg);
}

function hideNuoviArrivi() {
  const nuoviArrivi = document.querySelector('.nuoviArrivi');
  if(window.scrollY > 0){
    nuoviArrivi.classList.add('hidden');
  } else {
    nuoviArrivi.classList.remove('hidden');
  }
}

window.addEventListener('scroll', hideNuoviArrivi);


function showTendinaUomo() {
  const tendina = document.querySelector('#tendina_uomo');
  tendina.classList.remove('hidden');
  tendina.addEventListener('mouseleave', hideTendinaUomo);
}

function showTendinaDonna() {
  const tendina = document.querySelector('#tendina_donna');
  tendina.classList.remove('hidden');
  tendina.addEventListener('mouseleave', hideTendinaDonna);
}

function hideTendinaUomo() {
  document.querySelector('#tendina_uomo').classList.add('hidden');
}

function hideTendinaDonna() {
  document.querySelector('#tendina_donna').classList.add('hidden');
}

const headerlinks = document.querySelectorAll('#headerLink div');
let i = 0;
for (const headerlink of headerlinks)
{
  if(i !== 1){
  headerlink.addEventListener('mouseover', hideTendinaUomo);
  }
  if(i !== 2){
    headerlink.addEventListener('mouseover', hideTendinaDonna);
    }
  i = i+1;
}

const elements = document.querySelectorAll('.nuoviArrivi, #logo, #simbols');
for (const element of elements) {
element.addEventListener('mouseover', hideTendinaUomo);
element.addEventListener('mouseover', hideTendinaDonna);
}

document.querySelector('.nuoviArrivi').addEventListener('mouseover', hideTendinaUomo);
document.querySelector('.nuoviArrivi').addEventListener('mouseover', hideTendinaDonna);

const uomo = document.querySelector('#uomo');
uomo.addEventListener('mouseover', showTendinaUomo);

const donna = document.querySelector('#donna');
donna.addEventListener('mouseover', showTendinaDonna);


function cercaXpaese() {
  const iteu = document.querySelector('#it-eu');
  iteu.classList.remove('hidden');
  iteu.addEventListener('click', chiudiCercaXpaese);
}

function chiudiCercaXpaese(event) {
  event.currentTarget.classList.add('hidden');
}

function gestoreCercaPaese(event) {
  event.stopPropagation();
}

document.querySelector('#simbol_iteu').addEventListener('click', cercaXpaese);
document.querySelector('#cercaPaese').addEventListener('click', gestoreCercaPaese);

function openWallet() {
  const wallet = document.querySelector('#wallet');
  wallet.classList.remove('hidden');
  wallet.addEventListener('click', chiudiWallet);
  document.body.classList.add('no-scroll');
}

function chiudiWallet(event) {
  event.currentTarget.classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

function gestoreWallet(event) {
  event.stopPropagation();
}

document.querySelector('#simbol_wallet').addEventListener('click', openWallet);
document.querySelector('#wallet div').addEventListener('click', gestoreWallet);

function openSearch() {
  const search = document.querySelector('#search');
  search.classList.remove('hidden');
  document.querySelector('#close').addEventListener('click', chiudiSearch);
  document.body.classList.add('no-scroll');
}

function chiudiSearch() {
  document.querySelector('#search').classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

document.querySelector('#simbol_search').addEventListener('click', openSearch);

function showLogin() {
  const login = document.querySelector('#login');
  login.classList.remove('hidden');
  login.addEventListener('click', hideLogin);
}

function hideLogin(event) {
  event.currentTarget.classList.add('hidden');
}

function gestoreLogin(event) {
  event.stopPropagation();
}

document.querySelector('#simbol_login').addEventListener('click', showLogin);
document.querySelector('#tendina_login').addEventListener('click', gestoreLogin);

function showCart() {
  const cart = document.querySelector('#cart');
  cart.classList.remove('hidden');
  document.querySelector('section').classList.add('hidden');
  cart.querySelector('a').addEventListener('click', hideCart);
}

function hideCart() {
  document.querySelector('section').classList.remove('hidden');
  document.querySelector('#cart').classList.add('hidden');
}

document.querySelector('#simbol_shoppingbag').addEventListener('click', showCart);