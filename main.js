let enrolledName = document.getElementById('enrollName');
let email = document.querySelector('#inputEmail');
let website = document.querySelector('#inputWebsite');
let image = document.querySelector('#inputImg');
let gender = document.getElementsByName('gender');
let skills = document.getElementsByName('skills');

var form = document.getElementById('form');
var enrolledNone = document.getElementById('enrolledNone');
var table = document.querySelector('#students-table');
var genderValue = undefined;
var skillsValue = '';
var submitButton = document.querySelector('#enrollBtn');
var tableRowCounter = 1;

//add details in table
function addStudent() {
    if (submitButton.classList.contains('disabled')) {
        return;
    }
    enrolledNone.style = 'display: none;';
    gender.forEach(gen => {
        if (gen.checked) {
            genderValue = gen.value;
        }
    });
    skills.forEach(skill => {
        if (skill.checked) {
            skillsValue += skill.value + ', ';
        }
    });
    skillsValue = skillsValue.substring(0, skillsValue.length - 2);
    var tr = document.createElement('tr');
    var student =
        `<td class='student-info'>
                <div class="name"><strong>${enrolledName.value}</strong></div>
                <div class="gender">${genderValue}</div>
                <div class="email"><a href="mailto:${email.value}">${email.value}</a></div>
                <div class="website"><a href="${website.value}" target="_blank">${website.value}</a></div>
                <div class="skills">${skillsValue}</div>
            </td>
            <td class='student-info'>
                <div><img src="${image.value}" alt="student_image" height="100" width="120" /></div>
            </td>`;
    tr.innerHTML = student;
    tr.style = `background: ${tableRowCounter % 2 === 0 ? '#eeffcc' : '#fafafa'}`;
    tr.classList.add('tr-animation');
    skillsValue = '';
    table.appendChild(tr);
    tableRowCounter += 1;
}

//clear input fields
function clearFields() {
    form.reset();
    submitButton.classList.add('disabled');
}