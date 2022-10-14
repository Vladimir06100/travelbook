function Profil() {

    async function Test(){

        let response = await fetch("https://social-networkapi.osc-fr1.scalingo.io/travelbook/ ")
        console.log(response);
    }
Test();
}

export default Profil;