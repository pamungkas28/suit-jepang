function getPilihanComputer(){
    const comp = Math.random();

    if (comp < 0.34)return 'batu';
    if (comp >= 0.34 && comp < 0.67)return 'kertas';
    return 'gunting';

}

function getHasil(comp, player){
    if(player == comp)return 'seri';
    if (player == 'batu') return (comp == 'kertas') ? 'Menang' : 'Kalah!';
    if (player == 'gunting') return (comp == 'kertas') ? 'Kalah' : 'Menang!';
    if (player =='kertas') return (comp == 'batu') ? 'Kalah!' : 'Menang!';

}

function putar (){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['batu','kertas','gunting'];
    let i = 0;
    const waktuMUlai = new Date().getTime();
    
    setInterval(function(){
        if(new Date().getTime() - waktuMUlai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png' );
        if(i == gambar.length) i = 0;

    }, 100)
}

const pilihan =document.querySelectorAll('li img')
pilihan.forEach(function(pil){
        pil.addEventListener('click', function(){
        const PilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanPlayer, PilihanComputer);

        putar();
    
        setTimeout(function(){
            const imgComputer =document.querySelector('.img-computer');
            imgComputer.setAttribute('src','img/' + PilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

        
    });
});












// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
//     const PilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanPlayer, PilihanComputer);

//     const imgComputer =document.querySelector('.img-computer');
//     imgComputer.setAttribute('src','img/' + PilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pgunting = document.querySelector('.gunting');
// pgunting.addEventListener('click', function(){
//     const PilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pgunting.className;
//     const hasil = getHasil(pilihanPlayer, PilihanComputer);

//     const imgComputer =document.querySelector('.img-computer');
//     imgComputer.setAttribute('src','img/' + PilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });


