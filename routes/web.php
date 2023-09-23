<?php

use App\Http\Controllers\HomeController;
use Ezegyfa\LaravelHelperMethods\Language\LanguageMethods;
use Ezegyfa\LaravelHelperMethods\ServerCommands\ServerCommandMethods;
use Illuminate\Support\Facades\Route;


Route::middleware('setLanguage')->group(function () {
    LanguageMethods::createTranslatedGetRoutes('/', [HomeController::class, 'welcome']);
    LanguageMethods::createTranslatedGetRoutes('/about-us', [HomeController::class, 'aboutUs']);
    LanguageMethods::createTranslatedGetRoutes('/contact-and-faq', [HomeController::class, 'contactAndFAQ']);
    LanguageMethods::createTranslatedPostRoutes('/contact-and-faq', [HomeController::class, 'storeContactMessage']);
});
ServerCommandMethods::registerServerCommandRoutes();
