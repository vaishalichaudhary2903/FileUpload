import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'upload';
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;
  selectedFile: File | null = null;
  pdfUrl: SafeResourceUrl | null = null;
  buttonText="Swipe to Upload";
  @ViewChild('myCheckbox') checkbox!: ElementRef<HTMLInputElement>;
  private serverUrl = 'https://your-backend-server.com';  // dummy url

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.buttonText="Swipe to Upload"
      if (this.checkbox.nativeElement) {
        this.checkbox.nativeElement.checked = false;
      }
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const dataTransfer = event.dataTransfer;
    if (dataTransfer && dataTransfer.files.length > 0) {
      this.selectedFile = dataTransfer.files[0];
      this.buttonText="Swipe to Upload";
      if (this.checkbox.nativeElement) {
        this.checkbox.nativeElement.checked = false;
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  //for uploading the file via POST call
  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.pdfUrl =  this.selectedFile.name;
      this.buttonText = "File uploaded";
      this.selectedFile = null;
      
      this.http.post<{ pdfUrl: string }>(this.serverUrl, formData).subscribe(response => {
        // this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(response.pdfUrl);
        console.log("response",response)
      });

    }
  }
}
