import { TestBed } from '@angular/core/testing';
import { LoggerService } from "./logger.service"

describe('LoggerService', () => {
    let loggerService: LoggerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LoggerService]
        })

        loggerService = TestBed.inject(LoggerService)
    })

    it('Should return a message', () => {
        const result = loggerService.log('Teste')
        expect(result).toBe('Teste')
    })
})