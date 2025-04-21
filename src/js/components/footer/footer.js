import { footerView } from '../footer/footerView.js';

export function footer() {
    const container = document.querySelector('.footer')
    container.innerHTML = footerView();

}