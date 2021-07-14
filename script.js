const div = document.querySelector('#main');

fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function (data){
    let users = data.results;
    return users.map((user) => {

    const mainC = document.createElement('div');
    const subC = document.createElement('div');
    const bodyF = document.createElement('div');
    const bCard = document.createElement('div');
    const mainDiv = document.createElement('div');
    const profilePic = document.createElement('img');
    const profileName = document.createElement('h2');
    const contentSpan = document.createElement('span');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    div.appendChild(mainC);
    mainC.appendChild(subC);
    subC.append(mainDiv, bodyF);
    bodyF.appendChild(bCard);
    mainDiv.appendChild(profilePic);


    mainC.classList.add("card", "mb-3");
    subC.classList.add("row", "g-0");
    mainDiv.classList.add("col-md-4");
    bodyF.classList.add("col-md-8");
    bCard.classList.add("card-body");
    profilePic.classList.add("img-fluid", "profImg");
    profileName.classList.add("card-title");

    let fName = user.name.first;
    let lName = user.name.last;
    let email = user.email;
    let city = user.location.city;
    let nat = user.location.country;

    
    let profile = bCard.appendChild(profileName);
    let cSpan = bCard.appendChild(contentSpan);
    let eMail = bCard.appendChild(p1);
    let locC = bCard.appendChild(p2);
    let Nationality = bCard.appendChild(p3);

    profile.innerHTML = `${fName} ${lName}`;
    eMail.innerHTML = `${email}`;
    locC.innerHTML = `City: ${city}`;
    Nationality.innerHTML = `Nationality: ${nat}`;
    cSpan.innerHTML = "Email:"

    let image = mainDiv.appendChild(profilePic);
    image.src = user.picture.large;
});
})
  .catch (function (error){
      console.log(error);
  });
