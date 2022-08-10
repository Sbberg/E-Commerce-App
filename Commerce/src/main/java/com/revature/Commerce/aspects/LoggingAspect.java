package com.revature.Commerce.aspects;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

//@Aspect
//@Component
//public class LoggingAspect {
//
//   private static Logger log = Logger.getLogger(LoggingAspect.class);
//
//   @Before(value = "execution(* com.revature.Commerce.services.*.*(..))")
//   public void logBefore(JoinPoint joinPoint){
//      log.info("Info advice before method: " +joinPoint.getTarget().getClass()+": "+ joinPoint.getSignature().getName());
//   }
//
//   @AfterReturning(value = "execution(* com.revature.Commerce.services.*.*(..))")
//   public void logAfter(JoinPoint joinPoint){
//      log.info("Info advice after [Method Was Successful]: " +joinPoint.getTarget().getClass()+": "+ joinPoint.getSignature().getName());
//   }
//
//   @AfterThrowing(value = "execution(* com.revature.Commerce.services.*.*(..))")
//   public void logError(JoinPoint joinPoint){
//      log.error("Error when executing method: "+joinPoint.getTarget().getClass()+": "+ joinPoint.getSignature().getName());
//   }
//
//   @Around(value = "execution(* com.revature.Commerce.services.*.*(..))")
//   public Object logDuring(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
//      log.info("Info advice around method: " +proceedingJoinPoint.getTarget().getClass()+": "+ proceedingJoinPoint.getSignature().getName());
//
//      Object[] args = proceedingJoinPoint.getArgs();
//      //proceed the joinPoint/join
//      Object result = proceedingJoinPoint.proceed(args);
//      log.info("End of Advice");
//      return result;
//   }
//
//}
