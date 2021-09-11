import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

// Decorador
@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  public nombre: string = "Adrian";

  public imagen: string = "https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg";

  public boton = '<button>Hola</button> <script>console.log("")</script> ';
  public botonSanitizado: SafeHtml = '';

  public videoInseguro: string = 'https://www.youtube.com/embed/yEIBBS7TJmg';
  public videoSeguro: SafeResourceUrl = '';

  constructor(
    // import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
    private sanitizer: DomSanitizer
  ) { 
    this.botonSanitizado = this.sanitizer
                                .bypassSecurityTrustHtml(this.boton);
                                
    this.videoSeguro = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoInseguro
      );
  }

  ngOnInit(): void {
  }

}
