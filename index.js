__webpack_public_path__ = 'dist/';

System.import('./js/app');

if(/special-1/.test(location.search)){
    System.import('./js/special-1');
} else if(/special-2/.test(location.search)){
    System.import('./js/special-2');
} else {
    System.import('./js/app');
    console.log('no special needed.');
}
