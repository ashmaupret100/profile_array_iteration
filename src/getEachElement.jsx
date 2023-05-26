function getEachElement(person) {
  return (
    <>
      <div className="profile_box">
        <div className="picture"></div>
        <h3>Name: {person.name}</h3>
        <p className="age">Age: {person.age}</p>
        <p className="hobbies">
          {person.hobbies.map(function (hobby) {
            return (
              <>
                <li>
                  {person.name} loves {hobby}
                </li>
              </>
            );
          })}
        </p>
        <p className="bio">{person.bio}</p>
      </div>
    </>
  );
}
export default getEachElement;
