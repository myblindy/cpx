import { Injectable } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event/resized-event';

export enum StatusState {
    OK,
    Warning,
    Error,
    NotInitialized,
}

export class Status {

    public state: StatusState = StatusState.NotInitialized;
    public positionX: number;
    public positionY: number;

    constructor(
        public caption: String,
        public description: String) {}

}

export class Size {
    constructor(
        public width: number = 0,
        public height: number = 0) {}
}

@Injectable()
export class Backend {
    statuses: Status[] = [];
    statusPaneWidth: number;

    constructor() {
        this.statuses = [
            new Status('caption 1 tst', 'd1'),
            new Status('caption 2 tweurwyhu', 'd2'),
        ];
    }

    onStatusResized(event: ResizedEvent): void {
        this.statusPaneWidth = event.newWidth;
        console.log('status pane resize: width = ' + event.newWidth);
    }
}
