import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImprimirInscritosPage } from './imprimir-inscritos.page';

describe('ImprimirInscritosPage', () => {
  let component: ImprimirInscritosPage;
  let fixture: ComponentFixture<ImprimirInscritosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimirInscritosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImprimirInscritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
