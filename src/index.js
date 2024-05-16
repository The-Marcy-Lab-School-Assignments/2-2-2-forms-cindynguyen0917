/** GENERAL FEEDBACK:
 *
 */
const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const usernameResult = document.querySelector('#results-username')
    usernameResult.textContent = `${form.username.value}`;
    const codingLevelResult = document.querySelector('#results-coding-level')
    codingLevelResult.textContent = `${form.codingLevel.value}`;
    const locationResult = document.querySelector('#results-location')
    locationResult.textContent = `${form.location.value}`;
    const checkboxResult = document.querySelector('#results-did-like-assignment');
    if (form.didLikeAssignment.checked) {
        checkboxResult.textContent = "Yes"
    } else {
        checkboxResult.textContent = "No"

    }
    form.reset();
};
document.querySelector('form').addEventListener('submit', handleSubmit)
