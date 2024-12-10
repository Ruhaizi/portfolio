import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onSubmit() {
    const form = document.getElementById('contactForm') as HTMLFormElement | null;

    if (form) {
      if (!form.checkValidity()) {
        // Prevent form submission
        form.classList.add('was-validated');
      } else {
        // Form is valid, proceed with submission or further processing
        alert('Form submitted successfully!');
      }
    }
  }
  

}
