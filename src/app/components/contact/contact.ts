import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

  socialLinks = {
    whatsapp: 'https://web.whatsapp.com/',
    instagram: 'https://www.instagram.com/marwan.aljaml1?igsh=bXBmbjM4ZGkya3Fx',
    linkedIn: 'https://www.linkedin.com/in/marwan-aljaml-72129824b/',
    gitHub: 'https://github.com/MarwanJaml',

  };

  formData = {
    name: '',
    email: '',
    message: ''
  };


  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.send(
      'service_q2v22bp',
      'template_8qkeb38',
      this.formData,
      'MDvyhFxqfoH-saIzs'
    )
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully');
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }, (error) => {
        console.error('FAILED...', error.text);
        alert('Failed to send , try again later.');
      });

  }

}




