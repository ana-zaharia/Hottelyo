
const isValidElement = element => {
    return element.name && element.value;
};


const formToJSON = (elements) =>
    [].reduce.call(
        elements,
        (data, element) => {

            if (isValidElement(element)) {
                data[element.name] = element.value;
            }
            return data;
        },
        {},
    );

const handleFormSubmit = event => {


    event.preventDefault();


    const data = formToJSON(form.elements);

    const dataContainer = document.getElementsByClassName('results__display')[0];


    dataContainer.textContent = JSON.stringify(data, null, "  ");

};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);