import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoComponent } from './yes-no.component';
import { TestUtils } from '../../../../app/utils/test-utils';

fdescribe('YesNoComponent', () => {
  let component: YesNoComponent;
  let fixture: ComponentFixture<YesNoComponent>;
  let nativeElement: HTMLElement;
  let tu: TestUtils;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YesNoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    tu = TestUtils.instance(fixture);
  });


  describe('component structure', () => {
    beforeEach(() => fixture.detectChanges());
    it('should create', () => expect(component).toBeTruthy());
    it('should contain a YES button', () => expect(tu.byQa('yes')).toBeTruthy());
    it('should contain a NO button', () => expect(tu.byQa('no')).toBeTruthy());
  });

  describe('value', () => {
    describe('values', () => {
      beforeEach(() => fixture.detectChanges());
      it('should be undefined by default', () => {
        expect(component.value).toBe(undefined);
      });

      it('should activate the flag to true when yes is click', () => {
        tu.clickQa('yes');
        fixture.detectChanges();

        expect(component.value).toBe(true);
      });

      it('should activate the flag to false when no is click', () => {
        tu.clickQa('no');
        fixture.detectChanges();

        expect(component.value).toBe(false);
      });
    });
  });

  describe('display', () => {
    describe('border', () => {
      describe('no data prepopulated', () => {
        beforeEach(() => fixture.detectChanges());
        it('should not contain any class by default', () => {
          expect(tu.byQa('no').getAttribute('class')).not.toContain('yes-no-focus');
          expect(tu.byQa('yes').getAttribute('class')).not.toContain('yes-no-focus');
        });

        it('should add yes-no-focus class when YES is clicked', () => {
          tu.clickQa('yes');
          fixture.detectChanges();

          expect(tu.byQa('no').getAttribute('class')).not.toContain('yes-no-focus');
          expect(tu.byQa('yes').getAttribute('class')).toContain('yes-no-focus');
        });

        it('should add yes-no-focus class when NO is clicked', () => {
          tu.clickQa('no');
          fixture.detectChanges();

          expect(tu.byQa('yes').getAttribute('class')).not.toContain('yes-no-focus');
          expect(tu.byQa('no').getAttribute('class')).toContain('yes-no-focus');
        });
      });
    });
  });
});
