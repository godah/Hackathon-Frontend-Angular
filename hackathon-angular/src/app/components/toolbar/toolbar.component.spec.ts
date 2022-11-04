import { Overlay } from '@angular/cdk/overlay';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [MatDialogModule],
      providers: [MatDialog, Overlay],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should open modal on icon click', () => {
    const newsIconDE = fixture.debugElement.query(
      By.css('[aria-label="Sustentabilidade Notícias"]')
    );
    const spyMatDialogOpen = spyOn(component['dialog'], 'open');
    newsIconDE.nativeElement.dispatchEvent(new Event('click'));
    expect(spyMatDialogOpen).toHaveBeenCalled();
  });
});
