<?php
// Bring fnmatch compatability to non unix OS
if ( ! function_exists( 'fnmatch' ) )
{
    define( 'FNM_PATHNAME', 1 );
    define( 'FNM_NOESCAPE', 2 );
    define( 'FNM_PERIOD', 4 );
    define( 'FNM_CASEFOLD', 16 );

    function fnmatch( $pattern, $string, $flags = 0 )
    {
        return pcre_fnmatch( $pattern, $string, $flags );
    }
}

if ( ! function_exists( 'pcre_fnmatch' ) )
{
    function pcre_fnmatch( $pattern, $string, $flags = 0 )
    {
        $modifiers = null;
        $transforms = array(
            '\*'    => '.*',
            '\?'    => '.',
            '\[\!'    => '[^',
            '\['    => '[',
            '\]'    => ']',
            '\.'    => '\.',
            '\\'    => '\\\\'
        );

        // Forward slash in string must be in pattern:
        if ( $flags & FNM_PATHNAME )
            $transforms['\*'] = '[^/]*';

        // Back slash should not be escaped:
        if ( $flags & FNM_NOESCAPE )
            unset($transforms['\\']);

        // Perform case insensitive match:
        if ( $flags & FNM_CASEFOLD )
            $modifiers .= 'i';

        // Period at start must be the same as pattern:
        if ( $flags & FNM_PERIOD )
        {
            if ( strpos( $string, '.' ) === 0 && strpos( $pattern, '.' ) !== 0 )
                return false;
        }


        $pattern = '#^'
            . strtr( preg_quote( $pattern, '#' ), $transforms )
            . '$#'
            . $modifiers;

        return (boolean) preg_match( $pattern, $string );
    }
}