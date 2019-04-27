import { ComponentFixture } from '@angular/core/testing';

export class TestUtils {
    nativeElement: HTMLElement;

    constructor(fixture: ComponentFixture<{}>) {
        this.nativeElement = fixture.nativeElement;
    }

    static instance(fixture: ComponentFixture<{}>) {
        return new TestUtils(fixture);
    }

    byQa(qa: string): HTMLElement | HTMLInputElement {
        return this.nativeElement.querySelector(cssbyQa(qa));
    }

    clickQa(qa: string): void {
        this.byQa(qa).click();
    }
}

function cssbyQa(qa: string): string {
    return `[data-qa="${qa}"]`;
}
