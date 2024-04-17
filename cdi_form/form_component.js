const createForm = () => {
    // Create form element
    const form = document.createElement('form');
    form.setAttribute('id', 'myForm');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'https://webhook.site/fe0fd3e8-8d7f-455a-9523-a729292aa4b1');

    // Array of visible inputs with placeholders and names
    const visibleInputs = [
        { name: 'firstName', placeholder: 'First Name' },
        { name: 'lastName', placeholder: 'Last Name' },
        { name: 'phone', placeholder: 'Phone Number' },
        { name: 'email', placeholder: 'Email Address' }
    ];

    // Create visible inputs and append them to the form
    visibleInputs.forEach(input => {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('name', input.name);
        inputElement.setAttribute('placeholder', input.placeholder);
        form.appendChild(inputElement);
    });

    // Array of names for hidden inputs
    const hiddenInputNames = [
        'cdi_campaign', 'cdi_content', 'cdi_medium', 'cdi_source',
        'cdi_term', 'cdi_media_group_id', 'cdi_media_id', 'cdi_fbclid', 'cdi_gclid'
    ];

    // Create hidden inputs and append them to the form
    hiddenInputNames.forEach(name => {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'hidden');
        inputElement.setAttribute('name', name);
        form.appendChild(inputElement);
    });

    // Append the form to the body of the document (or another element if preferred)
    return form
}

class WixDefaultCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('cookies:', document.cookies)
  }

  connectedCallback() {
    this.appendChild(createForm());
  }
}
customElements.define('wix-default-custom-element', WixDefaultCustomElement);
