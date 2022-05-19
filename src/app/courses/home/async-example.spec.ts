import { fakeAsync, tick, flush, flushMicrotasks } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
describe('Async Testing Examples', () => {

    it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {
        let test = false;
        
        setTimeout(() => {
            console.log('Running assertions');
            
            test = true;
            expect(test).toBeTruthy()
            done()
        }, 1000);
    })

    it('Asynchronous test example - setTimeOut()', fakeAsync(() => {
        let test = false;

        setTimeout(() => {}, );

        setTimeout(() => {
            console.log('Running assertions setTimeOut');
            test = true;
            
        }, 1000);
        
        //tick(1000);
        flush()
        expect(test).toBeTruthy();
    }))

    it('Asynchronous test example - plain Promise MicroTask', fakeAsync(() => {
        let test = true;
        
        Promise.resolve()
            .then(() => {return Promise.resolve()} )
            .then(() => test = true );

        flushMicrotasks();
        expect(test).toBeTruthy();
    }))

    it('Asynchronous test example - Promise + setTimeOut', fakeAsync(() => {
        let counter = 0;
        
        Promise.resolve()
            .then(() => {
                counter+=10;
                setTimeout(() => {
                    counter +=1
                }, 1000);
            })
            

        expect(counter).toBe(0);
        flushMicrotasks();

        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(10);
        
        tick(500)
        expect(counter).toBe(11);
    }))

    it('Asynchronous test example - Observable', fakeAsync(() => {
        let test = false;
        console.log('Creating observable');

        const test$ = of(test).pipe(delay(1000));
        test$.subscribe(() => {
            test = true;
        })

        tick(1000)
        expect(test).toBeTruthy();
        
    }))
})