const socialLink = document.querySelectorAll('.social-link'),
    contactImage = document.querySelectorAll('.contact-image'),
    footer=document.querySelector('.footer span');
const NewDate=new Date();
let year = NewDate.getFullYear();   

socialLink.forEach(e => {

    const HoverDetails = () => {
        let details = `<div class='hover-detail'>${e.id}</div>`;
        e.insertAdjacentHTML('beforeend', details);
    }
    const RemoveHoverDetails = () => {
        e.removeChild(e.children[1]);
    }

    const SocialLinks = () => {
        if (e.name == 'LinkedIn') {

            window.open(`https://${e.name}.com/in/imohammedakash`);
        }
        else {
            window.open(`https://${e.name}.com/imohammedakash`);
        }

    }

    e.addEventListener('mouseenter', HoverDetails);
    e.addEventListener('mouseleave', RemoveHoverDetails);
    e.addEventListener('click', SocialLinks);

});
contactImage.forEach(e => {

    e.addEventListener('click', () => {
        let sibling = e.nextSibling;
        console.log(sibling);
        sibling.click();

    })

});
footer.innerHTML=`Copyright © ${year} | mohammedakash.com`
