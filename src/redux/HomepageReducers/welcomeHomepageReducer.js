import welcomeImage1 from "../../assets/images/welcome-images/Group 797.png"
import welcomeImage2 from "../../assets/images/welcome-images/Group 798.png"
import welcomeImage3 from "../../assets/images/welcome-images/Group 800.png"
import welcomeImage4 from "../../assets/images/welcome-images/Group 801.png"


let initialState = {
    welcomeDataHomepage: [
        {
            id: 1,
            imgSrc: welcomeImage1,
            text: `<p>Передовой подход <br />
                        к образовательному <br /> процессу</p>`
        },
        {
            id: 2,
            imgSrc: welcomeImage2,
            text: `<p>Непрерывное <br /> усовершенствование <br />
                        и пополнение базы курсов</p>`,
        },
        {
            id: 3,
            imgSrc: welcomeImage3,
            text: `<p>Только практикующие <br /> преподаватели</p>`,
        },
        {
            id: 4,
            imgSrc: welcomeImage4,
            text: `<p>Сопровождение на всех <br /> этапах. От начала обучения <br /> до трудоустройства</p>`,
        }
    ]
}

let welcomeHomepageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
}

export default welcomeHomepageReducer;