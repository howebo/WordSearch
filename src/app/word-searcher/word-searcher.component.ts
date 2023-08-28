import { Component, ViewChild, ElementRef } from '@angular/core';
import { WordDefinitionService } from '../word-definition.service';

@Component({
  selector: 'app-word-searcher',
  templateUrl: './word-searcher.component.html',
  styleUrls: ['./word-searcher.component.css'],
})
export class WordSearcherComponent {
  searchTerm: string = '';
  wordData: any = '';
  error: string = '';
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  constructor(private wordDefinitionService: WordDefinitionService) {}

  ngAfterViewInit() {
    this.audioPlayer.nativeElement.oncanplaythrough = () => {
      this.audioPlayer.nativeElement.play();
    };
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }
  searchWord() {
    this.wordDefinitionService.fetchWordDefinition(this.searchTerm).subscribe(
      (data) => {
        this.wordData = data[0];
        this.error = '';
      },
      (error) => {
        this.wordData = null;
        this.error = 'Word not found.';
      }
    );
  }
}
