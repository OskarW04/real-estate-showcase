document.addEventListener('DOMContentLoaded', () => {

    const slidesData = [
        {
            location: "Poznań 20-300",
            title: "POZNAŃ PARK",
            text: "Poznań Park to kameralne osiedle nowoczesnych domów, które harmonijnie łączy komfort życia z bliskością natury. Położone zaledwie 10 minut od centrum Poznania, oferuje ciszę i zieleń bez kompromisów - z łatwym dostępem do miejskich udogodnień.",
            imgsrc: "./media/poznanpark.jpg"
        },
        {
            location: "Kraków 30-001",
            title: "KRAKÓW GARDENS",
            text: "Odkryj luksus w sercu historycznego Krakowa. Krakow Gardens to prestiżowe apartamenty z widokiem na Wawel, oferujące unikalne połączenie tradycji i nowoczesnego designu dla najbardziej wymagających.",
            imgsrc: "./media/krakowgardens.jpg"
        },
        {
            location: "Gdańsk 80-838",
            title: "GDAŃSK MARINA",
            text: "Zamieszkaj nad samą Motławą w Gdańsk Marina. Ekskluzywne osiedle z prywatnym dostępem do nabrzeża, które łączy w sobie spokój nadmorskiego kurortu z energią tętniącego życiem miasta.",
            imgsrc: "./media/gdanskmarina.jpg"
        }
    ]
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const slideLocation = document.getElementById('slide-location');
    const slideTitle = document.getElementById('slide-title');
    const slideText = document.getElementById('slide-text');
    const slideImage = document.getElementById('slide-image');

    const animatedElements = [slideLocation, slideTitle, slideText, slideImage];
    let currentIndex = 0;


    function updateSlideContent(index) {
        const slide = slidesData[index];
        slideLocation.textContent = slide.location;
        slideTitle.textContent = slide.title;
        slideText.textContent = slide.text;
        slideImage.src = slide.imgsrc;
        slideImage.alt = `View on ${slide.title}`;
    }

    function displaySlide(index) {
        animatedElements.forEach(el => el.classList.add('slide-fade-out'));
        setTimeout(() => {
            updateSlideContent(index);
            animatedElements.forEach(el => el.classList.remove('slide-fade-out'));
        }, 300);
    }

    function updateButtonsState() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slidesData.length - 1;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < slidesData.length - 1) {
            currentIndex++;
            displaySlide(currentIndex);
            updateButtonsState();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            displaySlide(currentIndex);
            updateButtonsState();
        }
    });

    updateButtonsState();
})