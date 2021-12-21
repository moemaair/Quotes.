import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTextComponent } from './quote-text.component';

describe('QuoteTextComponent', () => {
  let component: QuoteTextComponent;
  let fixture: ComponentFixture<QuoteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
