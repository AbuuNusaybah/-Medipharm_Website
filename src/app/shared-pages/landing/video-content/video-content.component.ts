import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrl: './video-content.component.scss',
})
export class VideoContentComponent implements AfterViewInit {
  @ViewChild('videoErrorContainer') videoErrorContainer!: ElementRef;

  ngAfterViewInit() {
    // ... other initialization code ...
  }
  // Array of videos
  videos = [
    {
      id: 1,
      url: 'assets/videos/kariakoo.mp4',
      title: 'Kariakoo Documentary',
      description: 'An insightful look into the bustling market of Kariakoo.',
    },
    {
      id: 2,
      url: 'assets/videos/michezo.mp4',
      title: 'Michezo Highlights',
      description: 'Exciting sports moments from the past season.',
    },
    {
      id: 3,
      url: 'assets/videos/muhimbili.mp4',
      title: 'Muhimbili Overview',
      description: 'A tour of the Muhimbili hospital and its facilities.',
    },
    {
      id: 4,
      url: 'assets/videos/wanajeshi.mp4',
      title: 'Wanajeshi Tribute',
      description: 'Honoring the brave soldiers of our nation.',
    },
  ];

  // Currently playing video
  currentVideo = this.videos[0];

  // Change the current video
  changeVideo(video: any) {
    this.currentVideo = video;
  }

  // Go to the next video
  nextVideo() {
    const currentIndex = this.videos.indexOf(this.currentVideo);
    this.currentVideo = this.videos[(currentIndex + 1) % this.videos.length];
  }

  // Go to the previous video
  previousVideo() {
    const currentIndex = this.videos.indexOf(this.currentVideo);
    this.currentVideo =
      this.videos[(currentIndex - 1 + this.videos.length) % this.videos.length];
  }

  // handleVideoError(event: Event): void {
  //   const videoElement = event.target as HTMLVideoElement;
  //   const errorMessage = document.querySelector(
  //     '#error-message'
  //   ) as HTMLElement;

  //   if (videoElement?.error) {
  //     switch (videoElement.error.code) {
  //       case MediaError.MEDIA_ERR_ABORTED:
  //         errorMessage.innerText = 'Video playback was aborted.';
  //         break;
  //       case MediaError.MEDIA_ERR_NETWORK:
  //         errorMessage.innerText = 'Network error: Unable to load video.';
  //         break;
  //       case MediaError.MEDIA_ERR_DECODE:
  //         errorMessage.innerText = 'Video playback error occurred.';
  //         break;
  //       case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
  //         errorMessage.innerText = 'Unsupported video source.';
  //         break;
  //       default:
  //         errorMessage.innerText = 'An unknown error occurred.';
  //     }
  //   }
  // }

  handleVideoError(event: any) {
    if (this.videoErrorContainer && this.videoErrorContainer.nativeElement) {
      this.videoErrorContainer.nativeElement.innerText =
        'An error occurred playing the video.';
    } else {
      console.error('videoErrorContainer or its native element is null!');
    }
  }
}
